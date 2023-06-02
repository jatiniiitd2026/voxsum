export const Routes = {
    microsite: {
        promotionPeriod: {endPoint: '/promotion/period', method: 'GET'},
        support: {endPoint: '/customersupport', method: 'POST'}
    },
    user: {
        registration: {endPoint: '/register/user', method: 'POST'},
        login: {endPoint: '/login', method: 'POST'},
        uploadReceipt: {endPoint: '/receipt/upload', method: 'POST'},
        verifyToken: {endPoint: '/verify-token', method: 'GET'},
        claimReward: {endPoint: '/selectReward', method: 'GET'},
        resetPassword: {endPoint: '/resetPassword', method: 'POST'},
        verifySpinWinToken: {endPoint: '/verify-token', method:'POST'},
        spinWinRewards: {endPoint: '/getSpinWheel/reward', method: 'GET'},
        spinWinLimit: {endPoint: '/getSpinWheel/limit', method: 'POST'},
        redeem: {endPoint: '/getSpinWheel/redeem', method: 'POST'},
        receiptList: {endPoint: '/receipt/list/', method: 'POST'},
        uploadReceiptLimit: {endPoint:'/reward/limit', method: 'POST'}
    }
}
