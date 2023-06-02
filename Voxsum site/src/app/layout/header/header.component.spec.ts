import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DOCUMENT} from "@angular/common";
import {HeaderComponent} from './header.component';
import {PageScrollService} from "ngx-page-scroll-core";
import {AppTestingConstants} from "@core/constants/app-testing-constants";

declare const AOS: any;

/**
 * TODO - Error
 * Can't bind to 'ngForOf' since it isn't a known property of 'ng-container'.
 */

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;
    let pageScrollService: PageScrollService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [
                AppTestingConstants.TestBedConfigurationProviders,
                {
                    provider: DOCUMENT,
                    useValue: document
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        pageScrollService = TestBed.inject(PageScrollService);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
