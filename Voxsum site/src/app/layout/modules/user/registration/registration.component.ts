import {Component, EventEmitter, NgZone, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {RegistrationAPIRequestPayloadModel, RegistrationAPIResponseModel} from "@data/schema/register.model";
import {RegistrationValidationMessages} from "@modules/registration/registration-validation-messages";
import {AppConstants} from "@core/constants/app-constants";
import {DataService} from "@data/services/data.service";
import {StorageService} from "@core/services/storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LoggedService} from "@data/services/logged.service";
import {MatchingFieldsUtility} from "@core/utility/matching-password.utility";
interface PurchaseFrom {
    value: string;
    viewValue: string;
}
interface PromotionFrom {
    value: string;
    viewValue: string;
}
@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    isFormTouched: boolean = false;
    showSpinner: boolean = false;
    hide = true;
    userRegistrationFormData!: RegistrationAPIRequestPayloadModel;
    purchases: PurchaseFrom[] = [
        {value: 'target', viewValue: 'Target'},
        {value: 'walmart', viewValue: 'Walmart'},
        {value: 'cvs pharmacy', viewValue: 'CVS Pharmacy'},
        {value: 'other', viewValue: 'Other'},
    ];
    promotions: PromotionFrom[] = [
        {value: 'target', viewValue: 'Through a Friend'},
        {value: 'Word of Mouth', viewValue: 'Word of Mouth'},
        {value: 'In-Store Advertising', viewValue: 'In-Store Advertising'},
        {value:'Social Media',viewValue:'Social Media'},
        {value:'Search Engine (Google, Yahoo, etc.)',viewValue:'Search Engine (Google, Yahoo, etc.)'},
        {value:'Radio',viewValue:'Radio'},
        {value:'TV',viewValue:'TV'},
        {value:'Word of Mouth',viewValue:'Word of Mouth'},
        {value: 'other', viewValue: 'Other'},
    ];
    registrationForm: FormGroup = this.formBuilder.group({
        firstName: ['', Validators.compose([
            Validators.maxLength(254),
            Validators.required,
            Validators.pattern('(^[a-zA-Z\-]+$)')
        ])],
        lastName: ['', Validators.compose([
            Validators.maxLength(254),
            Validators.required,
            Validators.pattern('(^[a-zA-Z\-]+$)')
        ])],
        emails: this.formBuilder.group({
            email: ['', Validators.compose([
                Validators.maxLength(254),
                Validators.pattern(AppConstants.emailPattern),
                Validators.required,
            ])],
            confirmEmail: ['', Validators.compose([
                Validators.maxLength(254),
                Validators.pattern(AppConstants.emailPattern),
                Validators.required,
            ])],
        }, {
            validator: MatchingFieldsUtility.checkFields('email', 'confirmEmail')
        }),
        phoneNo:[null,Validators.compose([
            Validators.required,
            Validators.pattern(AppConstants.phoneNoPattern),
        ])],
        purchaseFrom:['',[Validators.required]],
        promotionFrom:['',[Validators.required]],
        isAgree: [null, Validators.compose([
            Validators.requiredTrue
        ])],
        recaptcha: [null, Validators.compose([
            Validators.required
        ])]
    });

    registrationValidationMessages = RegistrationValidationMessages;

    constructor(private ngZone: NgZone,
                private toast: ToastrService,
                private formBuilder: FormBuilder,
                private dataService: DataService,
                private storageService: StorageService,
                private loggedService: LoggedService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.storageService.removeItemFromSessionStorage('user');
    }

    displayError(control: any, validation: any) {
        return !(validation.type === 'pattern' && this.registrationForm.controls[control].hasError('maxlength'));
    }

    onSubmit() {
        this.isFormTouched = true;
        this.showSpinner = true;
        if (this.registrationForm.invalid) {
            return;
        }
        this.userRegistrationFormData = new RegistrationAPIRequestPayloadModel(this.registrationForm.value);
        this.dataService.registerUser(this.userRegistrationFormData).subscribe((response: RegistrationAPIResponseModel) => {
            this.storageService.setItemToSessionStorage('user', JSON.stringify(response));
            this.loggedService.isLoggedInValue(true);
            this.router.navigate(['/upload-receipt']);
        }, (error) => {
            this.isFormTouched = false;
            this.registrationForm.reset();
            if (error === AppConstants.userAlreadyRegistered) {
                this.toast.error(error);
                this.router.navigate(['/login']);
                return;
            }
            this.toast.error('Something went wrong, Please try again!')
            console.error(error);
        })
    }
}
