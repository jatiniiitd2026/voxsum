import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {EarnRedeemService} from "@data/services/earn-redeem.service";

@Injectable({
    providedIn: 'root'
})
export class SpinwinGuard implements CanActivate {
    constructor(private earnRedeem: EarnRedeemService,
                private router: Router,
                private toast: ToastrService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        const token = route.queryParams.token;
        if (token) {
            return this.earnRedeem.verifyToken(token).pipe(map((data) => {
                if (data) {
                    return true
                } else {
                    this.router.navigate(['home']);
                    this.toast.error('You are not authorized to view this page.');
                    return false
                }
            }), catchError((error) => {
                this.router.navigate(['home']);
                this.toast.error('You are not authorized to view this page.');
                return of(false);
            }))
        } else {
            this.router.navigate(['home']);
            this.toast.error('You are not authorized to view this page.');
            return of(false);
        }
    }
}
