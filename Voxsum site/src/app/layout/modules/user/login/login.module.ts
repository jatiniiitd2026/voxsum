import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from "@core/core.module";
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";
import {SharedModule} from "@shared/shared.module";
import {AppConstants} from "@core/constants/app-constants";
import {LoginComponent} from "@modules/login/login.component";
import {LoginRoutingModule} from "@modules/login/login-routing.module";



@NgModule({
    declarations: [
       LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        CoreModule,
        SharedModule
    ],
    providers: [
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: {
                siteKey: AppConstants.recaptchaSiteKey,
            } as RecaptchaSettings,
        }
    ]
})
export class LoginModule {
}
