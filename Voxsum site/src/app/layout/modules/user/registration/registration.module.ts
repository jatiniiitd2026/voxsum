import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {RegistrationComponent} from './registration.component';
import {CoreModule} from "@core/core.module";
import {RECAPTCHA_SETTINGS, RecaptchaSettings} from "ng-recaptcha";
import {SharedModule} from "@shared/shared.module";
import {AppConstants} from "@core/constants/app-constants";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        CoreModule,
        SharedModule,
        MatTooltipModule
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
export class RegistrationModule {
}
