import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {AppConstants} from "@core/constants/app-constants";
import {SupportValidationMessages} from "@shared/support-form/support-validation-messages";
import {DataService} from "@data/services/data.service";
import {ToastrService} from "ngx-toastr";


@Component({
    selector: 'app-support-form',
    templateUrl: './support-form.component.html',
    styleUrls: ['./support-form.component.scss']
})
export class SupportFormComponent implements OnInit {

    supportForm: FormGroup;
    supportValidationMessages = SupportValidationMessages;
    isFormTouched = false;

    constructor(private formBuilder: FormBuilder,
                private dataService: DataService,
                private toast: ToastrService) {
        this.supportForm = this.formBuilder.group({
            name: ['', Validators.compose([
                Validators.required,
                Validators.minLength(1),
                Validators.maxLength(254),
                Validators.pattern('^[^-\\s][a-zA-Z\\s-]+$')
            ])],
            email: ['', Validators.compose([
                Validators.required,
                Validators.pattern(AppConstants.emailPattern),
                Validators.maxLength(254)
            ])],
            message: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(254)
            ])]
        });
    }

    ngOnInit(): void {
    }

    onSubmit(form : FormGroupDirective) {
        this.isFormTouched = true;
        if (this.supportForm.invalid) {
            return
        }
        let supportDetails = {
            name: this.supportForm.value.name,
            email: this.supportForm.value.email,
            message: this.supportForm.value.message
        }
        console.log('this is our support form details:',supportDetails);
    }

}
