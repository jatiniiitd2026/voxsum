import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectRewardComponent} from './select-reward.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('SelectRewardComponent', () => {
    let component: SelectRewardComponent;
    let fixture: ComponentFixture<SelectRewardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                AppTestingConstants.TestBedConfigurationImports
            ],
            providers: [
                AppTestingConstants.TestBedConfigurationProviders
            ],
            declarations: [SelectRewardComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SelectRewardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
