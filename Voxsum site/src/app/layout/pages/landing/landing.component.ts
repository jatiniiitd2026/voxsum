import {Component} from '@angular/core';
import {BannerModel} from "@data/schema/banner.model";
import {AppConstants} from "@core/constants/app-constants";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent{

    bannersArr: BannerModel[] = AppConstants.bannerImage;
    isBannerLinkActive = AppConstants.enableBannerLink;
}
