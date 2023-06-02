import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LandingComponent} from './landing.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('LandingComponent', () => {
    let component: LandingComponent;
    let fixture: ComponentFixture<LandingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LandingComponent],
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
