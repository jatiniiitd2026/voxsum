import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from "@core/constants/app-constants";

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const userCred = AppConstants.basicAuthCredentials;
        request = request.clone({
            setHeaders: {
                Authorization: `Basic ${userCred}`
            }
        })
        return next.handle(request);
    }
}
