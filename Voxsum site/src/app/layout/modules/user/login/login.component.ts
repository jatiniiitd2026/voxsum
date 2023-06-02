import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppConstants} from "@core/constants/app-constants";
import {DataService} from "@data/services/data.service";
import {StorageService} from "@core/services/storage.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {LoginValidationMessages} from "@modules/login/login-validation-messages";
import {LoginRequest, UserProfileDetails} from "@modules/login/login";
import {LoggedService} from "@data/services/logged.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    showForm: boolean = true;
    loginValidationMessages = LoginValidationMessages;
    loginResponse!: UserProfileDetails;

    loginForm: FormGroup = this.formBuilder.group({
        email: ['', Validators.compose([
            Validators.required,
            Validators.pattern(AppConstants.emailPattern),
            Validators.maxLength(254)
        ])]
    });

    constructor(private toast: ToastrService,
                private formBuilder: FormBuilder,
                private dataService: DataService,
                private storageService: StorageService,
                private router: Router,
                private loggedService: LoggedService,) {
    }

    onSubmit() {
        if (this.loginForm.invalid) return;
        const loginRequest = new LoginRequest(this.loginForm.value.email);
        this.showForm = false;
        this.dataService.login(loginRequest).subscribe((data: UserProfileDetails) => {
            this.loginResponse = data;
            this.updateLoginDetails();
        }, (error) => {
            console.error(error);
            this.showForm = true;
            this.toast.error(error);
        });
    }

    updateLoginDetails() {
        this.storageService.setItemToSessionStorage('user', JSON.stringify(this.loginResponse));
        this.loggedService.isLoggedInValue(true);
        this.router.navigate(['/upload-receipt']);
    }
}
