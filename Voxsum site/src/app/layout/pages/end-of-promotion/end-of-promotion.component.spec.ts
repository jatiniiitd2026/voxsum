import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EndOfPromotionComponent} from './end-of-promotion.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('EndOfPromotionComponent', () => {
    let component: EndOfPromotionComponent;
    let fixture: ComponentFixture<EndOfPromotionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EndOfPromotionComponent],
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EndOfPromotionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
