import {Component, OnInit} from '@angular/core';
import {AppConstants} from "@core/constants/app-constants";

declare const AOS: any;

@Component({
    selector: 'app-page-loader',
    templateUrl: './page-loader.component.html',
    styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {
    showClass = true;
    src = AppConstants.mainLogo;

    ngOnInit(): void {
        setTimeout(() => {
            this.showClass = false;
            AOS.init({
                once: true
            });
        }, 1500);
    }

}
