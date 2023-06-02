import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {PromotionPeriodResponseModel} from "@data/schema/promotion-period.model";
import {DataService} from "@data/services/data.service";
import {ToastrService} from "ngx-toastr";
import {StorageService} from "@core/services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoggedService} from "@data/services/logged.service";



@Component({
    selector: 'app-content-container',
    templateUrl: './content-container.component.html',
    styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit, AfterViewInit {
    isSpinWheelRoute: boolean = false;
    promotionEnded: boolean = false;
    promotionStarted: boolean = false;
    selectReward: boolean = false;


    constructor(private dataService: DataService,
                private toast: ToastrService,
                private storageService: StorageService,
                private activatedRoute: ActivatedRoute,
                private cd: ChangeDetectorRef,
                private loggedService: LoggedService,
                private route: Router
    ) {
    }

    ngOnInit(): void {
        this.checkPromotionPhase();
        this.loggedService.setLoggedInValue();
        if (this.route.url.split('?')[0] === '/spintowin'){
            this.isSpinWheelRoute = true;
        }
    }

    updateRewardClaimValue(content: boolean) {
        this.selectReward = content;
    }

    checkPromotionPhase() {
        this.dataService.getPromotionPeriod().subscribe((response: PromotionPeriodResponseModel) => {
            response.promotionStatus = 'PromotionLive'
            switch (response.promotionStatus) {
                case 'PromotionLive':
                    this.promotionStarted = true;
                    this.promotionEnded = false;
                    this.storageService.promotionLive.next(true);
                    break;
                case 'PromotionEnded':
                    let params = this.activatedRoute.snapshot.queryParams;
                    if (params.userid && params.receipt_token) {
                        this.selectReward = true;
                    }
                    this.promotionStarted = false;
                    this.promotionEnded = true;
                    break;
                case 'ComingSoon':
                    this.promotionEnded = false;
                    this.promotionStarted = false;
                    break;
            }
        }, (error) => {
            console.error(error);
        })
    }

    ngAfterViewInit() {
        this.cd.detectChanges();
    }
}
