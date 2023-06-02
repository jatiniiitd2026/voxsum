export class SupportValidationMessages {
    static errorMessages = {
        name: [
            {type: 'required', message: 'Name is required'},
            {type: 'maxlength', message: 'Name must be less then 254 characters and greater then 1 character'},
            {type: 'pattern', message: 'Please enter a valid name'}
        ],
        email: [
            {type: 'required', message: 'Email is required'},
            {type: 'pattern', message: 'Email should be in correct pattern'},
        ],
        message: [
            {type: 'required', message: 'Message is required'},
            {type: 'maxlength', message: 'Message must be less then 254 characters'},
        ],
        recaptcha: [
            {type: 'required', message: 'Please check the captcha'},
        ]
    };
}

export interface HeaderResponseModel {
    response: string;
}
