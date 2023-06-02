import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppConstants} from "@core/constants/app-constants";
import {ForgotPasswordValidationMessages} from "@modules/forgot-password/forgot-password-validation-messages";
import {DataService} from "@data/services/data.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    formSubmitted:boolean = false;
    errorMessages:any[] = ForgotPasswordValidationMessages.errorMessages;
    forgotPassword: FormGroup = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.emailPattern)])]
    })

    constructor(private formBuilder: FormBuilder,
                private dataService:DataService,
                private router:Router,
                private toastr:ToastrService) {
    }

    ngOnInit(): void {
    }

    onSubmit(){
        if (this.forgotPassword.invalid) return;
        this.formSubmitted = true;
        this.dataService.forgotPassword(this.forgotPassword.value.email).subscribe(response => {
            this.formSubmitted = false;
            this.toastr.success(response);
            this.forgotPassword.reset();
            this.router.navigate(['/home']);
        },error => {
            console.error(error);
            this.formSubmitted = false;
            this.toastr.error(error);
            this.forgotPassword.reset();
        });
    }
}
