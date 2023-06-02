import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from "@layout/pages/landing/landing.component";
import {EndOfPromotionComponent} from "@pages/end-of-promotion/end-of-promotion.component";
import {ComingSoonComponent} from "@pages/coming-soon/coming-soon.component";
import {LoginRegisteredGuard} from "@core/guards/login-registered.guard";
import {ForgotPasswordComponent} from "@modules/forgot-password/forgot-password.component";
import {ResetPasswordComponent} from "@modules/reset-password/reset-password.component";
import {TokenGuard} from "@core/guards/token.guard";
import {SelectRewardComponent} from "@modules/select-reward/select-reward.component";
import {SpinwinGuard} from "@modules/spinwin/spinwin.guard";

const routes: Routes = [
    {
        path: 'home',
        component: LandingComponent,
        canActivate: []
    },
    {
        path: 'endofpromotion',
        component: EndOfPromotionComponent
    },
    {
        path: 'comingsoon',
        component: ComingSoonComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'resetpassword',
        component: ResetPasswordComponent,
        canActivate: [TokenGuard]
    },
    {
        path: 'selectreward',
        component: SelectRewardComponent,
        canActivate: []
    },
    {
        path: 'registration',
        loadChildren: () => import('@modules/registration/registration.module').then(m => m.RegistrationModule),
        canActivate: []
    },
    {
        path: 'login',
        loadChildren: () => import('@modules/login/login.module').then(m => m.LoginModule),
        canActivate: []
    },
    {
        path: 'upload-receipt',
        loadChildren: () => import('@modules/upload-receipt/upload-receipt.module').then(m => m.UploadReceiptModule),
        canActivate: [LoginRegisteredGuard]
    },
    {
        path: 'spintowin',
        loadChildren: () => import('./modules/earn-redeem/spinwin/spinwin.module').then(m => m.SpinwinModule),
        canActivate: [SpinwinGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
