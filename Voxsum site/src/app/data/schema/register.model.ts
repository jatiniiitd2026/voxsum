/**
 * Registration API Payload
 */
export class RegistrationAPIRequestPayloadModel {
    primaryInfo: PrimaryInfoModel;
    agreeToTerms: boolean;
    phoneNumber: string;
    purchaseFrom: string;
    promotionFrom: string;

    constructor(formData: RegisterFormDataModel) {
        this.primaryInfo = new PrimaryInfoModel(formData.firstName, formData.lastName, formData.emails.email, formData.emails.confirmEmail);
        this.phoneNumber = formData.phoneNo;
        this.purchaseFrom = formData.purchaseFrom;
        this.promotionFrom= formData.promotionFrom;
        this.agreeToTerms = formData.isAgree ?? true;
    }
}

export class PrimaryInfoModel {
    firstName: string;
    lastName: string;
    email: EmailDataModel;
    constructor(firstName: string, lastName: string,
                email: string, confirmEmail: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = new EmailDataModel(email, confirmEmail);
    }
}

export class EmailDataModel {
    email: string;
    confirmEmail: string;
    constructor(email: string, confirmEmail: string) {
        this.email = email;
        this.confirmEmail = confirmEmail;
    }
}

export interface RegisterFormDataModel {
    firstName: string;
    lastName: string;
    emails: {
        email: string;
        confirmEmail: string;
    }
    phoneNo: string;
    purchaseFrom:string;
    promotionFrom:string;
    isAgree: boolean;
    recaptcha: string;
}
/**
 * Registration API response
 */
export interface RegistrationAPIResponseModel {
    created: string
    firstName: string
    lastName: string
    email: string
    phone: string
    purchaseFrom: string
    promotionFrom: string
    id: number
    suspended: boolean

}
