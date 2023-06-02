import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {StorageService} from "@core/services/storage.service";
import {ToastrService} from "ngx-toastr";
import {AppConstants} from "@core/constants/app-constants";
import {take} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class LoginRegisteredGuard implements CanActivate {

    constructor(
        private router: Router,
        private toast: ToastrService,
        private storageService: StorageService,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.storageService.getItemFromSessionStorage('user')) {
            return true;
        } else {
            let promotionLiveStatus = this.storageService.currentPromotionStatus.pipe(take(2));
            promotionLiveStatus.subscribe(response => {
                console.log(response);
                if (response) {
                    this.toast.error(AppConstants.uploadReceiptPage);
                }
            });
            this.router.navigate(['/registration']);
            return false;
        }
    }
}
