import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SupportFormComponent} from './support-form.component';
import {TranslateService} from "@ngx-translate/core";
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('SupportFormComponent', () => {
    let component: SupportFormComponent;
    let fixture: ComponentFixture<SupportFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            declarations: [SupportFormComponent],
            providers: [TranslateService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SupportFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
