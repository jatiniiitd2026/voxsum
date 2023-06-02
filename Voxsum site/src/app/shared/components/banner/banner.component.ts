import {Component, Input} from '@angular/core';
import SwiperCore, {Autoplay, EffectFade, Navigation} from "swiper/core";
import {BannerModel} from "@data/schema/banner.model";
import {SwiperOptions} from "swiper";
import {Router} from "@angular/router";

SwiperCore.use([Navigation, Autoplay, EffectFade]);

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
    @Input() enableLink: boolean = false;
    @Input() banners: BannerModel[] = [{
        desktop: '',
        mobile: '',
        link: ''
    }];
    sliderConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        preloadImages: false,
        lazy: true,
        loop: this.banners.length > 1,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
    };

    constructor(private router: Router) {
    }

    redirect(data: string) {
        this.router.navigate([data]);
    }

}
