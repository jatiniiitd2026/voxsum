import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CoreModule} from "@core/core.module";
import {SupportFormComponent} from '@shared/support-form/support-form.component';
import {FaqComponent} from '@shared/faq/faq.component';
import {BannerComponent} from '@shared/banner/banner.component';
import {PageLoaderComponent} from '@shared/page-loader/page-loader.component';
import {SafeHtmlPipe} from './pipe/safe-html.pipe';


@NgModule({
    declarations: [
        SupportFormComponent,
        FaqComponent,
        BannerComponent,
        PageLoaderComponent,
        SafeHtmlPipe,
    ],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        SupportFormComponent,
        FaqComponent,
        BannerComponent,
        PageLoaderComponent,
    ],
    providers: []
})

export class SharedModule {
}
