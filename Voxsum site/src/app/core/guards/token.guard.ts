import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {LoggedService} from "@data/services/logged.service";
import {catchError, map} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class TokenGuard implements CanActivate {
    constructor(private loggedService: LoggedService,
                private router: Router,
                private toast: ToastrService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {
        const token = route.queryParams.token;
        if (token) {
            return this.loggedService.verifyToken(token).pipe(map((data) => {
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


