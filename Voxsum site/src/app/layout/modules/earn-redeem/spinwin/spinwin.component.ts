import {Component, HostListener, OnInit} from '@angular/core';
import {Spin2WinWheel} from "@assets/spin-win/js/Spin2WinWheel";
import {EarnRedeemService} from "@data/services/earn-redeem.service";
import data from "@assets/spin-win/wheel_data.json";
import {ContestSpinRewardsResponse} from "@data/schema/SpinWin.model";
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {PopupSpinComponent} from "@modules/spinwin/popup-spin/popup-spin.component";

@Component({
    selector: 'app-spinwin',
    templateUrl: './spinwin.component.html',
    styleUrls: ['./spinwin.component.scss']
})
export class SpinwinComponent implements OnInit {

    rewardArray: any;
    tokenisedUrl!: string;
    spinRewardsLoaded: boolean = false;
    isSpinAllowed: boolean = false;
    myWheel: Spin2WinWheel;
    isSpinWheelRoute: boolean = false;
    rewardWon!: string;
    spinMeClicked: boolean = false;
    public getScreenWidth: any;
    changeLayoutToColumn = false;

    constructor(private earnRedeemService: EarnRedeemService,
                private router: Router,
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.getScreenWidth = window.innerWidth;
        this.isSpinWheelRoute = true;
        // ==============> This Part gets limit of Spin Win Contest <==============
        this.tokenisedUrl = environment.api.base + this.router.routerState.snapshot.url
        this.earnRedeemService.getContestDetailsLimit(this.tokenisedUrl).subscribe(data => {
            this.getContest();
            this.isSpinAllowed = !data.isRedeemed;
        }, error => {
            console.error(error)
        });
    }

    @HostListener('window:resize', ['$event'])

    onWindowResize() {
        this.getScreenWidth = window.innerWidth;
        if(this.getScreenWidth <= 814){
            this.changeLayoutToColumn = true;
        }
        else{
            this.changeLayoutToColumn = false;
        }
    }

    getContest() {
        let jsonData = data;
        this.earnRedeemService.getContestDetails().subscribe((response: ContestSpinRewardsResponse) => {
            this.spinRewardsLoaded = true;    // Setting variable to let us know spin win is rerwards are loaded
            this.rewardArray = response.rewards;
            jsonData.segmentValuesArray = [];
            response.rewards.forEach((x) => {
                jsonData.segmentValuesArray.push({
                    probability: 0,
                    type: "string",
                    value: x.rewardName,
                    win: true,
                    resultText: "",
                    textColor: '#000080',
                    userData: {
                        score: 0
                    }
                })
            })
            this.myWheel = new Spin2WinWheel();
            this.myWheel.init({
                callee: this,
                data: jsonData,
                onResult: this.myResult,
            });
        }, error => {
            console.error(error);
        })
    }

    myResult(e) {
        this.rewardWon = e.msg;
        const dialogRef = this.dialog.open(PopupSpinComponent, {
            panelClass: 'popup-modal',
            autoFocus: false,
            data: this.rewardWon
        });
        this.spinMeClicked = false
    }

    onSubmit() {
        this.spinMeClicked = true
        this.earnRedeemService.redeemSpinAndWin(this.tokenisedUrl, this.rewardArray).subscribe(data => {
            this.myWheel.start(data);
        }, error => {
            console.error(error);
        })
    }

}
