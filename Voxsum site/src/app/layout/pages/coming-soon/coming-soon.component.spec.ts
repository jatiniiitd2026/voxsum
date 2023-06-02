import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ComingSoonComponent} from './coming-soon.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";

describe('ComingSoonComponent', () => {
    let component: ComingSoonComponent;
    let fixture: ComponentFixture<ComingSoonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ComingSoonComponent],
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ComingSoonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
