import {Component, OnInit} from '@angular/core';
import {BannerModel} from "@data/schema/banner.model";
import {AppConstants} from "@core/constants/app-constants";

@Component({
    selector: 'app-coming-soon',
    templateUrl: './coming-soon.component.html',
    styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
    bannersArr: BannerModel[] = AppConstants.bannerImage;
    headerLogo = AppConstants.mainLogo
    isBannerLinkActive = AppConstants.disableBannerLink;

    constructor() {
    }

    ngOnInit(): void {
    }

}
