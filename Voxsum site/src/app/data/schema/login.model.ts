/**
 * Registration API Payload
 */
export class LoginAPIRequestPayloadModel {
    primaryInfo: PrimaryInfoModel;
    mailingAddress: AddressDataModel;
    optionIn: boolean;
    agreeToTerms: boolean;

    constructor(formData: RegisterFormDataModel) {
        this.primaryInfo = new PrimaryInfoModel(formData.firstName, formData.lastName, formData.emails.email, formData.emails.confirmEmail);
        this.mailingAddress = new AddressDataModel(formData.address, formData.addressFields);
        this.optionIn = false;
        this.agreeToTerms = formData.isAgree ?? false;
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
        this.email = new EmailDataModel(email, email);
    }
}

export class EmailDataModel {
    originalEmail: string;
    confirmEmail: string;

    constructor(originalEmail: string, confirmEmail: string) {
        this.originalEmail = originalEmail;
        this.confirmEmail = confirmEmail;
    }
}

export class AddressDataModel {
    address: string;
    city: string;
    state: string;
    zipcode: string;

    constructor(mailingAddress: string, addressFields: AddressFieldsModel) {
        this.address = mailingAddress;
        this.city = addressFields.city;
        this.state = addressFields.state;
        this.zipcode = addressFields.zipCode;
    }
}

export interface RegisterFormDataModel {
    firstName: string;
    lastName: string;
    emails: {
        email: string;
        confirmEmail: string;
    }
    address: string;
    addressFields: AddressFieldsModel
    isAgree: boolean;
    recaptcha: string;
}

export interface AddressFieldsModel {
    city: string;
    state: string;
    zipCode: string
}

/**
 * Registration API response
 */
export interface RegistrationAPIResponseModel {
    created: string;
    email: string;
    firstName: string;
    lastName: string;
    id: number;
    mailingAddress: string;
    optIn: boolean;
    suspended: boolean;
}
