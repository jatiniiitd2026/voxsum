import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ContentContainerComponent} from './content-container.component';
import {AppTestingConstants} from "@core/constants/app-testing-constants";
import {ComingSoonComponent} from "@pages/coming-soon/coming-soon.component";
import {EndOfPromotionComponent} from "@pages/end-of-promotion/end-of-promotion.component";
import {FooterComponent} from "@layout/footer/footer.component";
import {PageLoaderComponent} from "@shared/page-loader/page-loader.component";

declare const AOS: any;

describe('ContentContainerComponent', () => {
    let component: ContentContainerComponent;
    let fixture: ComponentFixture<ContentContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppTestingConstants.TestBedConfigurationImports],
            providers: [AppTestingConstants.TestBedConfigurationProviders],
            declarations: [
                ContentContainerComponent,
                ComingSoonComponent,
                EndOfPromotionComponent,
                FooterComponent,
                PageLoaderComponent
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContentContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
