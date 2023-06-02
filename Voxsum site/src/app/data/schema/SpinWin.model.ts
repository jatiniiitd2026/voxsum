export interface ContestSpinRewardsResponse {
    rewards: RewardsName[];
}

export interface RewardsName {
    rewardId: string;
    rewardName: string;

}

export interface isSpinAvailable {
    isRedeemed: boolean;
}

export interface contestRedeem {
    reward: number;
}

export interface ContestSweepStakesUsage {
    behaviourId: boolean;
}
