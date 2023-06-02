import {NgModule} from '@angular/core';
import {LayoutRoutingModule} from "@layout/layout-routing.module";
// Layout Core
import {HeaderComponent} from "@layout/header/header.component";
import {FooterComponent} from "@layout/footer/footer.component";
import {ContentContainerComponent} from '@layout/content-container/content-container.component';
// Pages
import {LandingComponent} from '@pages/landing/landing.component';
import {EndOfPromotionComponent} from '@layout/pages/end-of-promotion/end-of-promotion.component';
import {ComingSoonComponent} from '@layout/pages/coming-soon/coming-soon.component';
// Modules
import {RegistrationModule} from "@modules/user/registration/registration.module";
import {UploadReceiptModule} from "@modules/earn-redeem/upload-receipt/upload-receipt.module";
import {SharedModule} from "@shared/shared.module";
import {CommonModule} from "@angular/common";
import {CoreModule} from "@core/core.module";
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from '@modules/reset-password/reset-password.component';
import {SelectRewardComponent} from '@modules/select-reward/select-reward.component';


@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        EndOfPromotionComponent,
        ComingSoonComponent,
        LandingComponent,
        ContentContainerComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        SelectRewardComponent
    ],
    imports: [
        LayoutRoutingModule,
        RegistrationModule,
        UploadReceiptModule,
        SharedModule,
        CommonModule,
        CoreModule
    ]
})
export class LayoutModule {
}
