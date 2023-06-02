export class RegistrationValidationMessages {
    static errorMessages = {
        email: [
            {type: 'required', message: 'Please enter your email'},
            {type: 'pattern', message: 'Please enter a valid email'},
            {type: 'isExist', message: 'Email address already exist'},
        ],
        confirmEmail: [
            {type: 'required', message: 'Please confirm the email'},
            {type: 'pattern', message: 'Please enter a valid email'},
            {type: 'notSame', message: 'Email address does not match'}
        ],
        phoneNo:[
            {type: 'required',message:'Please enter your number'},
            {type: 'pattern', message: 'PhoneNo. is not valid.'},
        ],
        purchaseFrom:[
            {type:'required',message:'Please select one'},
        ],
        promotionFrom:[
            {type:'required',message:'Please select one'},
        ],
        firstName: [
            {type: 'required', message: 'Please enter your first name'},
            {type: 'pattern', message: 'Please enter a valid name'},
            {type: 'maxlength', message: 'Maximum of 254 characters are allowed'},
        ],
        lastName: [
            {type: 'required', message: 'Please enter your last name'},
            {type: 'pattern', message: 'Please enter a valid name'},
            {type: 'maxlength', message: 'Maximum of 254 characters are allowed'},
        ],
        isAgree: [
            {type: 'required', message: 'Please agree with the above'},
        ],
        recaptcha: [
            {type: 'required', message: 'Please check the captcha'},
        ]
    };
}
