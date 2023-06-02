import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CookieModule} from "ngx-cookie";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppTestingConstants.TestBedConfigurationImports
            ],
            declarations: [
                AppComponent
            ],
            providers: [
                AppTestingConstants.TestBedConfigurationProviders
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'microsite-mucinex-fast-max-GWP-frontend'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('microsite-mucinex-fast-max-GWP-frontend');
    });

});
