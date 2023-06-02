import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {StorageService} from "@core/services/storage.service";
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {LanguageRequest} from "@data/schema/language.model";

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private language = new BehaviorSubject<'en' | 'fr'>('en');
    currentLanguage = this.language.asObservable();

    private country = new BehaviorSubject<string>(this.storageService.getItem('userCountry') ?? 'N/A');
    userCountry = this.country.asObservable();

    constructor(private translate: TranslateService,
                private storageService: StorageService,
                private http: HttpClient,
                private toast: ToastrService) {
    }

    init() {
        const languageId: ('en' | 'fr')[] = ['en', 'fr'];
        const userCookieLanguage = this.storageService.getItem('userLang');
        const userCookieCountry = this.storageService.getItem('userCountry');
        const condition = languageId.indexOf(userCookieLanguage) === -1 || userCookieCountry === null || userCookieCountry === 'N/A' || userCookieCountry === '';

        // if (condition) {
        //     // API call to Lambda to check the user country
        //     this.geoLocate().subscribe(country => {
        //         this.country.next(country.toUpperCase());
        //         this.storageService.setItem('userCountry', country)
        //         this.selectLanguage(languageId[country !== 'CA' ? 0 : 1]);
        //     }, error => {
        //         console.error(error);
        //         this.country.next(userCookieCountry ?? 'N/A');
        //         this.selectLanguage(languageId[0]);
        //     });
        //
        //     return
        // }

        this.selectLanguage(userCookieLanguage);
    }

    selectLanguage(value: 'en' | 'fr') {
        this.translate.use(value);
        this.language.next(value);
        this.storageService.setItem('userLang', value);
        // this.setLanguage(new LanguageRequest(value)).subscribe(value => {
        //     console.log(value.message)
        // }, error => {
        //     console.error(error)
        // })
    }

    // geoLocate(): Observable<any> {
    //     return this.http.get<'en' | 'fr'>(environment.geoIpLamda, AppConstants.requestTextOptions);
    // }

    // setLanguage(lang: LanguageSwitch): Observable<SwitchResult> {
    //     return this.http.post<SwitchResult>(environment.api.base + environment.api.routes.user.switchLanguage.endPoint, lang, AppConstants.requestOptions)
    // }
}
