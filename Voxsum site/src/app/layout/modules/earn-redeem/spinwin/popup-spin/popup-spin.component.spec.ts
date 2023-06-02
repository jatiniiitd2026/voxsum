import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PopupSpinComponent} from './popup-spin.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MaterialModule} from "@core/material/material.module";

describe('PopupSpinComponent', () => {
    let component: PopupSpinComponent;
    let fixture: ComponentFixture<PopupSpinComponent>;

    beforeEach(async () => {
        let data;
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports, MaterialModule],
            providers: [AppTestingConstants.TestBedConfigurationProviders,
                {provide: MatDialogRef, useValue: {}}, {
                    provide: MAT_DIALOG_DATA,
                    useValue: data
                }],
            declarations: [PopupSpinComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PopupSpinComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
