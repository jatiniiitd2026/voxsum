import {Component, OnInit} from '@angular/core';
import {BannerModel} from "@data/schema/banner.model";
import {AppConstants} from "@core/constants/app-constants";

@Component({
    selector: 'app-end-of-promotion',
    templateUrl: './end-of-promotion.component.html',
    styleUrls: ['./end-of-promotion.component.scss']
})
export class EndOfPromotionComponent implements OnInit {
    bannersArr: BannerModel[] = AppConstants.bannerImage;
    headerLogo = AppConstants.mainLogo
    isBannerLinkActive = AppConstants.disableBannerLink;

    constructor() {
    }

    ngOnInit(): void {
    }

}
