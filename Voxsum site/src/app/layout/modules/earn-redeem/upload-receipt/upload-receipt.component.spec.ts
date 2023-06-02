import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadReceiptComponent} from './upload-receipt.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('UploadReceiptComponent', () => {
    let component: UploadReceiptComponent;
    let fixture: ComponentFixture<UploadReceiptComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders],
            declarations: [UploadReceiptComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadReceiptComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
