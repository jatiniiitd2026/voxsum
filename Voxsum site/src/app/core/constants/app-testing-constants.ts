import {Injectable} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "@shared/shared.module";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {CookieModule} from "ngx-cookie";
import {StorageService} from "../services/storage.service";
import {CoreModule} from "@core/core.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {RecaptchaFormsModule, RecaptchaModule} from "ng-recaptcha";
import {CommonModule} from "@angular/common";
import {DataService} from "@data/services/data.service";

@Injectable()
export class AppTestingConstants {
    public static readonly errorMessage = 'Something went wrong, Please try again!'
    public static readonly TestBedConfigurationImports = [
        BrowserModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        RecaptchaFormsModule,
        RecaptchaModule,
        ToastrModule.forRoot(),
        CookieModule.forRoot(),
        TranslateModule.forRoot(),
    ];

    public static readonly TestBedConfigurationProviders = [
        StorageService,
        TranslateService,
        DataService
    ];
}
