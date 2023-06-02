import {NgModule} from '@angular/core';
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {CookieModule} from "ngx-cookie";
import {NgxDropzoneModule} from "ngx-dropzone";
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import {NgxPageScrollModule} from "ngx-page-scroll";
import {SwiperModule} from "swiper/angular";
import {ToastrModule} from "ngx-toastr";
import {LanguageService} from "@core/services/language.service";
import {StorageService} from "@core/services/storage.service";
import {MaterialModule} from "@core/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export function HttpTranslateLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        SwiperModule,
        NgxDropzoneModule,
        NgxPageScrollModule,
        NgxPageScrollCoreModule.forRoot({
            duration: 500,
        }),
        CookieModule.forRoot(),
        ToastrModule.forRoot({
            maxOpened: 1
        }),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (HttpTranslateLoaderFactory),
                deps: [HttpClient]
            },
            defaultLanguage: 'en'
        }),
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        TranslateModule,
        RecaptchaModule,
        RecaptchaFormsModule,
        NgxDropzoneModule,
        SwiperModule
    ],
    providers: [
        LanguageService,
        StorageService,
    ]
})
export class CoreModule {
}
