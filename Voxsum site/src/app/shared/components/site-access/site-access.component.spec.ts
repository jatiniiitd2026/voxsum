import {ComponentFixture, TestBed} from '@angular/core/testing';
import {SiteAccessComponent} from './site-access.component';
import {MatDialogRef} from "@angular/material/dialog";
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('SiteAccessComponent', () => {
    let component: SiteAccessComponent;
    let fixture: ComponentFixture<SiteAccessComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            declarations: [SiteAccessComponent],
            providers: [{provide: MatDialogRef, useValue: {}}]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SiteAccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
