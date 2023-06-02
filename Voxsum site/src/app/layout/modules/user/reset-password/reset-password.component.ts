import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppConstants} from "@core/constants/app-constants";
import {ResetPasswordValidationMessages} from "@modules/reset-password/reset-password-validation-messages";
import {MatchingFieldsUtility} from "@core/utility/matching-password.utility";
import {LoggedService} from "@data/services/logged.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ResetPasswordModel} from "@data/schema/reset-password.model";

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    hide = true;
    resetPasswordToken!: string
    errorMessages = ResetPasswordValidationMessages.errorMessages;
    resetPassword: FormGroup = this.formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.emailPattern)])],
        passwords: this.formBuilder.group({
                originalPassword: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.passwordPattern)])],
                confirmPassword: ['', Validators.compose([Validators.required, Validators.pattern(AppConstants.passwordPattern)])]
            },
            {
                validators: MatchingFieldsUtility.checkFields('originalPassword', 'confirmPassword')
            }
        )
    })

    constructor(private formBuilder: FormBuilder,
                private loggedService: LoggedService,
                private activatedRoute: ActivatedRoute,
                private toast: ToastrService,
                private router: Router) {
    }


    ngOnInit(): void {
        this.resetPasswordToken = this.activatedRoute.snapshot.queryParams.token;
    }

    onSubmit() {
        if (this.resetPassword.invalid) return;
        const payload = new ResetPasswordModel(
            this.resetPasswordToken,
            this.resetPassword.value.email,
            {
                confirmPassword: (this.resetPassword.value.passwords.confirmPassword),
                originalPassword: (this.resetPassword.value.passwords.originalPassword)
            }
        )
        this.loggedService.resetPassword(payload).subscribe(response => {
            this.toast.success(response);
            this.router.navigate(['/home']);
        }, error => {
            this.toast.error(error);
            this.router.navigate(['/home']);
        })
    }
}
