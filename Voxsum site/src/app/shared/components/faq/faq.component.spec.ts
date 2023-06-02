import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FaqComponent} from './faq.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('FaqComponent', () => {
    let component: FaqComponent;
    let fixture: ComponentFixture<FaqComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            declarations: [FaqComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FaqComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
