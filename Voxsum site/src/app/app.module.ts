import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from '@app/app-routing.module';
import {AppComponent} from '@app/app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
// Directory Modules
import {CoreModule} from "@core/core.module";
import {DataModule} from "@data/data.module";
import {SharedModule} from "@shared/shared.module";
import {LayoutModule} from "@layout/layout.module";
import {HttpErrorInterceptor} from "@core/interceptors/http-error.interceptor";
import {BasicAuthInterceptor} from "@core/interceptors/basic-auth.interceptor";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        // App Routing
        AppRoutingModule,
        // Directory Modules
        CoreModule,
        DataModule,
        LayoutModule,
        SharedModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
