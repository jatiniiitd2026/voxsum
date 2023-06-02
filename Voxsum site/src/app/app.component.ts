import {Component} from '@angular/core';
import {environment} from "../environments/environment";
import {AppConstants} from "@core/constants/app-constants";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'microsite-mucinex-fast-max-GWP-frontend';

    constructor() {
        console.log('ENV name =', environment.environment_name)
    }
    ngOnInit(): void {
        this.setPanelGtag();
    }

    setPanelGtag() {
        if (environment.environment_name === AppConstants.productionENV) {
            const gtagPanelScript = document.createElement('script');
            gtagPanelScript.async = true;
            gtagPanelScript.src = AppConstants.gtagPanelScriptSrc;
            document.getElementsByTagName('head')[0].appendChild(gtagPanelScript);
            const gtagDataLayer = document.createElement('script');
            gtagDataLayer.innerHTML = AppConstants.gtagPanelDataLayer;
            document.getElementsByTagName('head')[0].appendChild(gtagDataLayer);
        } else {
            // eslint-disable-next-line no-console
            console.log('%cNO PANEL GTAG SET', 'color: yellow;font-style: italic;background-color: blue;padding: 2px');
        }
    }
}
