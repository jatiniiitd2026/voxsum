import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RewardModel} from "@data/schema/reward.model";
import {ToastrService} from "ngx-toastr";
import {DataService} from "@data/services/data.service";

@Component({
    selector: 'app-select-reward',
    templateUrl: './select-reward.component.html',
    styleUrls: ['./select-reward.component.scss']
})

export class SelectRewardComponent implements OnInit {

    @Output() canClaimReward = new EventEmitter<boolean>();
    rewards: any = [
        {value: '253', viewValue: 'AirBnb'},
        {value: '98', viewValue: 'Dunkin Donuts'},
        {value: '133', viewValue: 'Tacos'},
        {value: '366', viewValue: 'Nike'},
        {value: '225', viewValue: 'Uber'}
    ];

    rewardForm: FormGroup = this.formBuilder.group({
        reward: ['', Validators.compose([Validators.required])]
    })

    constructor(private formBuilder: FormBuilder,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private toast: ToastrService,
                private dataService: DataService) {
    }

    ngOnInit(): void {
        this.checkParameters();
    }


    checkParameters() {
        let params = this.activatedRoute.snapshot.queryParams;
        if (!params.p3userid || !params.receiptuuid) {
            this.router.navigate(['/']);
        }
    }

    onSubmit() {
        if (this.rewardForm.invalid) {
            return;
        }
        let params = this.activatedRoute.snapshot.queryParams;
        let payload = new RewardModel(params.p3userid, params.receiptuuid, this.rewardForm.value.reward);
        this.dataService.claimReward(payload).subscribe(response => {
            this.toast.success('An email will be sent shortly with the reward Details.')
            this.router.navigate(['/']);
        }, error => {
            this.toast.error(error);
            this.router.navigate(['/']);
        })
    }
}

