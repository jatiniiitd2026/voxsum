import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageLoaderComponent} from './page-loader.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

declare const AOS: any;

describe('PageLoaderComponent', () => {
    let component: PageLoaderComponent;
    let fixture: ComponentFixture<PageLoaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            declarations: [PageLoaderComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PageLoaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
