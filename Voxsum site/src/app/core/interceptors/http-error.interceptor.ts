import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMsg = '';
                if (error.error instanceof ErrorEvent) {
                    errorMsg = `Error Client side: ${error.error.message}`;
                } else {
                    if (error.status === 400){
                        errorMsg = error.error.error
                    }else{
                        errorMsg = `Error Server side: ${error.status},  Message: ${error.message}`;
                    }
                }
                return throwError(errorMsg);
            })
        )
    }
}
