import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie";
import {RegistrationAPIResponseModel} from "@data/schema/register.model";
import {BehaviorSubject, interval} from "rxjs";
import {take} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    userDetails!: RegistrationAPIResponseModel;

    myLocalStorage: any = {};
    promotionLive = new BehaviorSubject<boolean>(false);
    currentPromotionStatus = this.promotionLive.asObservable();

    public isLoggedIn: boolean = false;

    constructor(private cookieService: CookieService) {
        // this.setIsLoggedIn();
    }

    // setIsLoggedIn() {
    //     this.userDetails = JSON.parse(this.getItemFromSessionStorage('user'));
    //     this.isLoggedIn = this.isSessionStorageAvailable() ? !!this.userDetails && !!this.userDetails.mailingAddress : !!this.cookieService.get('user');
    // }

    isLocalStorageAvailable() {
        const test = 'localCheck';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    isSessionStorageAvailable() {
        const test = 'localCheck';
        try {
            sessionStorage.setItem(test, test);
            sessionStorage.removeItem(test);
            return true;
        } catch (e) {
            return false;
        }
    }

    setItem(key: string, value: string) {
        if (this.isLocalStorageAvailable()) {
            localStorage.setItem(key, value);
        } else {
            if (key === 'user' || key === 'jwtToken-twitter') {
                this.cookieService.put(key, value);
            } else {
                this.myLocalStorage[key] = value;
            }
        }
    }

    setItemToSessionStorage(key: string, value: string) {
        if (this.isLocalStorageAvailable()) {
            sessionStorage.setItem(key, value);
        } else {
            this.myLocalStorage[key] = value;
        }
    }

    getItem(key: string) {
        if (this.isLocalStorageAvailable()) {
            return localStorage.getItem(key);
        } else {
            if (key === 'user' || key === 'jwtToken-twitter') {
                return this.cookieService.get(key);
            } else {
                return this.myLocalStorage[key];
            }
        }
    }

    getItemFromSessionStorage(key: string) {
        if (this.isLocalStorageAvailable()) {
            return sessionStorage.getItem(key);
        } else {
            return this.myLocalStorage[key];
        }
    }

    clear() {
        if (this.isLocalStorageAvailable()) {
            localStorage.clear();
            sessionStorage.clear();
        } else {
            this.cookieService.removeAll();
            this.myLocalStorage = {};
        }
    }

    removeItem(key: string) {
        if (this.isLocalStorageAvailable()) {
            localStorage.removeItem(key);
        } else {
            if (key === 'user') {
                this.cookieService.remove(key);
            } else {
                delete this.myLocalStorage[key];
            }
        }
    }

    removeItemFromSessionStorage(key: string) {
        if (this.isLocalStorageAvailable()) {
            sessionStorage.removeItem(key);
        } else {
            delete this.myLocalStorage[key];
        }
    }
}
