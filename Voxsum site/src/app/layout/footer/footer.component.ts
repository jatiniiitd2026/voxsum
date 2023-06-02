import {Component} from '@angular/core';
import {Menu} from "@data/schema/menu.model";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent{
    footerLinks: Menu[] = [
        {title: 'COMMON.FOOTER.LINKS.PRIVACY', path: 'https://www.mucinex.com/pages/privacy-policy'},
        {title: 'COMMON.FOOTER.LINKS.TNC', path: 'https://p3-custom-client.s3.us-west-2.amazonaws.com/reckit_mucinex/Mucinex-Fast-Max-GWP.pdf'}
    ]
}
