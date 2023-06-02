export class RewardModel {
    p3UserId: string;
    uuid: string;
    rewardBrandId: string;

    constructor(p3UserId: string, uuid: string, rewardBrandId: string) {
        this.p3UserId = p3UserId;
        this.uuid = uuid;
        this.rewardBrandId = rewardBrandId
    }
}
