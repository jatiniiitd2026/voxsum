import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment.prod";

@Injectable()
export class AppConstants {
    /**
     * Basic Auth Credentials
     */
    public static readonly basicAuthCredentials = window.btoa(environment.basicAuth.username + ':' + environment.basicAuth.password);

    /**
     * Form Data
     */
    public static readonly namePattern = '(^[a-zA-Z\-]+$)';
    public static readonly phoneNoPattern ='(^((\\+91-?)|0)?[0-9]{10}$)';
    public static readonly successPopTitle = 'Great! Operation successfully completed.';
    public static readonly errorPopTitle = 'Snap! Please try again.';
    public static readonly passwordPattern = '(^(?=.*?[a-zA-Z])(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,15}$)';
    public static readonly emailPattern = '(?:[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&\'*+/=?^_`{|}~-]+)*)@(?:(?:[a' +
        '-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+(?:[a-zA-Z0-9-]*[a-zA-Z]){2,})';

    /**
     * API requests
     */
    public static readonly requestTextOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'plain/text'
        }),
        responseType: 'text' as 'json'
    };
    public static readonly requestOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };

    /**
     * Google places API
     */
    public static readonly usa = 'US';
    public static readonly addressComponents = 'address_components';
    public static readonly formattedAddress = 'formatted_address';
    public static readonly googlePlaceJSONNameField = 'name';

    /**
     * Image based assets
     */
    public static readonly mainLogo = 'assets/images/logo/voxsum.png';
    public static readonly clientLogo = 'assets/images/logo/3tl-logo.png';

    /**
     Site Banner
     */
    public static readonly bannerImage = [
        {
            mobile: 'https://i.postimg.cc/bNhJsGNg/fotor-2023-6-1-17-29-31.png',
            desktop: 'https://i.postimg.cc/HLyZ5HGH/Banner-copy.png',
            link: '/registration'
        }
    ]
    public static readonly disableBannerLink = false;
    public static readonly enableBannerLink = true;

    /**
     * Upload Receipt based
     */
    public static readonly imgLimit = 'One file can be uploaded.';
    public static readonly fileType = 'Please select a valid file format.';
    public static readonly imgSize = 'Image size is more than 5 mb, it cannot be uploaded.';
    public static readonly imgError = 'The image you chose is not compatible with our system.';
    public static readonly uploadReceiptPage = 'Please Register to view the requested page.';
    public static readonly userAlreadyRegistered = 'User is already registered. Please login to continue.';

    /**
     * Google Recaptcha key
     */
    public static readonly recaptchaSiteKey = '6Lfa6Q0TAAAAACcH--9Vp8VZ2159EbHJAtc8ld4q';

    /*
    * SiteAccess Credentials for staging
    */

    public static readonly username = 'mucinex@3tierlogic.com';
    public static readonly password = 'muciNeX!@#!';

    /**
     * Google tag manager constants
     */
    public static readonly gtagPanelScriptSrc = 'https://www.googletagmanager.com/gtag/js?id=UA-134066772-92';
    public static readonly gtagPanelDataLayer = 'window.dataLayer = window.dataLayer || [];\n' +
        '\n' +
        '        function gtag() {\n' +
        '            dataLayer.push(arguments);\n' +
        '        }\n' +
        '\n' +
        '        gtag(\'js\', new Date());\n' +
        '\n' +
        '        gtag(\'config\', \'UA-134066772-92\');';

    /**
     * ENV names
     */
    public static readonly localENV = 'local/development'; // environment.ts
    public static readonly stagingENV = 'staging'; // environment.stag.ts
    public static readonly productionENV = 'production'; // environment.prod.ts


}

