import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadReceiptPopupComponent} from './upload-receipt-popup.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";
import {MaterialModule} from "@core/material/material.module";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

describe('UploadReceiptPopupComponent', () => {
    let component: UploadReceiptPopupComponent;
    let fixture: ComponentFixture<UploadReceiptPopupComponent>;

    beforeEach(async () => {
        let data;
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports, MaterialModule],
            providers: [AppTestingConstants.TestBedConfigurationProviders,
                {provide: MatDialogRef, useValue: {}}, {
                    provide: MAT_DIALOG_DATA,
                    useValue: data
                }],
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UploadReceiptPopupComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
