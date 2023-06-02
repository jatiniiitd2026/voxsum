import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {StorageService} from "@core/services/storage.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {PaginationModel} from "@data/schema/pagination.model";

@Injectable({
    providedIn: 'root'
})
export class LoggedService {

    private isLoggedIn = new BehaviorSubject<boolean>(this.storageService.isLoggedIn);
    loggedIn = this.isLoggedIn.asObservable();

    constructor(private storageService: StorageService,
                private httpClient: HttpClient) {
    }

    isLoggedInValue(value: boolean) {
        this.isLoggedIn.next(value);
    }

    setLoggedInValue() {
        if (this.storageService.getItemFromSessionStorage('user')) {
            this.isLoggedIn.next(true);
        } else {
            this.isLoggedIn.next(false);
        }
    }

    verifyToken(token: string): Observable<any> {
        return this.httpClient.get<any>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.verifyToken.endPoint, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: {
                token: token
            }
        });
    }

    resetPassword(payload: any):Observable<any> {
        return this.httpClient.post(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.resetPassword.endPoint, payload)
    }


    fetchReceiptDetails(userEmail:string):Observable<PaginationModel[]> {
        return this.httpClient.get<PaginationModel[]>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.receiptList.endPoint + userEmail);
    }

}
