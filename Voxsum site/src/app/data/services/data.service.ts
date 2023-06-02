import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AppConstants} from "@core/constants/app-constants";
import {environment} from "../../../environments/environment";
import {PromotionPeriodResponseModel} from "@data/schema/promotion-period.model";
import {SupportModal} from "@data/schema/support.modal";
import {RegistrationAPIRequestPayloadModel, RegistrationAPIResponseModel} from "@data/schema/register.model";
import {LoginRequest, UserProfileDetails} from "@modules/login/login";
import {RewardModel} from "@data/schema/reward.model";
import {UploadLimitPayloadModel, UploadLimitResponseModel} from "@data/schema/upload-receipt-popup.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private httpClient: HttpClient) {
    }

    /**
     * To get the promotion status of the microsite
     */
    getPromotionPeriod(): Observable<PromotionPeriodResponseModel> {
        return this.httpClient.get<PromotionPeriodResponseModel>(environment.api.base + environment.api.baseMicrosite +
            environment.api.routes.microsite.promotionPeriod.endPoint, AppConstants.requestOptions)
    }

    /**
     * Registration API which gets user registration form data
     * as payload.
     * @param payload
     */
    registerUser(payload: RegistrationAPIRequestPayloadModel): Observable<RegistrationAPIResponseModel> {
        return this.httpClient.post<RegistrationAPIResponseModel>(environment.api.base + environment.api.baseMicrosite +
            environment.api.routes.user.registration.endPoint,payload, AppConstants.requestOptions)
    }

    /**
     * Login API which gets user registration form data
     * as payload.
     * @param loginRequest
     */
    login(loginRequest: LoginRequest): Observable<UserProfileDetails> {
        return this.httpClient.post<UserProfileDetails>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.login.endPoint, loginRequest, AppConstants.requestOptions);
    }

    /**
     *
     * @param pdfFile
     * @param userEmail
     */
    uploadPdf(pdfFile: Blob, userEmail: string): Observable<any> {
        const formData = new FormData();
        formData.append('receipt', pdfFile);
        formData.append('userEmail', userEmail);
        return this.httpClient.post<string>(environment.api.base + environment.api.baseMicrosite +
            environment.api.routes.user.uploadReceipt.endPoint, formData)
    }

    /**
     *
     * @param image
     * @param userEmail
     */
    uploadReceipt(image: File, userEmail: string): Observable<any> {
        const formData = new FormData();
        formData.append('receipt', image);
        formData.append('userEmail', userEmail);
        return this.httpClient.post<string>(environment.api.base + environment.api.baseMicrosite +
            environment.api.routes.user.uploadReceipt.endPoint, formData)
    }


    /**
     *
     * @param payload
     */

    claimReward(payload: RewardModel): Observable<any> {
        return this.httpClient.post<string>(environment.api.base + environment.api.baseMicrosite +
            environment.api.routes.user.claimReward.endPoint, payload)
    }

    forgotPassword(forgotEmail: string): Observable<string> {
        return this.httpClient.post<string>(environment.api.base + 'OlayHoliday/forgotPassword', {
            email: forgotEmail
        });
    }

    uploadReceiptLimit(email: string): Observable<any>{
        let payload: UploadLimitPayloadModel = {
            email: email
        }
        return this.httpClient.post(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.uploadReceiptLimit.endPoint, payload, AppConstants.requestOptions);
    }
}
