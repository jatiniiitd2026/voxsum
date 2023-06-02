import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppConstants} from "@core/constants/app-constants";
import {contestRedeem, ContestSpinRewardsResponse, isSpinAvailable, RewardsName} from "@data/schema/SpinWin.model";


@Injectable({
    providedIn: 'root'
})
export class EarnRedeemService {

    constructor(private http: HttpClient) {
    }

    /**
     * SpinWin API Calls
     */

    getContestDetailsLimit(tokenisedUrl: string): Observable<isSpinAvailable> {
        let payload = {
            "tokenizedUrl": tokenisedUrl
        };
        return this.http.post<isSpinAvailable>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.spinWinLimit.endPoint, payload, AppConstants.requestOptions);
    }

    getContestDetails(): Observable<ContestSpinRewardsResponse> {
        return this.http.get<ContestSpinRewardsResponse>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.spinWinRewards.endPoint, AppConstants.requestOptions);
    }

    redeemSpinAndWin(tokenisedUrl: string, rewardArray: RewardsName): Observable<contestRedeem> {
        let payload = {
            "tokenUrl": tokenisedUrl,
            "rewardsIds": rewardArray
        };
        return this.http.post<contestRedeem>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.redeem.endPoint, payload, AppConstants.requestOptions);
    }

    verifyToken(token) {
        return this.http.get<any>(environment.api.base + environment.api.baseMicrosite + environment.api.routes.user.verifySpinWinToken.endPoint, {params: {token: token}});
    }

}
