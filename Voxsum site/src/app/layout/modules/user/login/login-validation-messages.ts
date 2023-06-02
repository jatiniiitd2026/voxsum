export class LoginValidationMessages {
    static errorMessages = {
        email: [
            {type: 'required', message: 'ERRORS.LOGIN.EMAIL_REQUIRED'},
            {type: 'pattern', message: 'ERRORS.LOGIN.EMAIL_PATTERN'}
        ],
        password: [
            {type: 'required', message: 'ERRORS.LOGIN.EMAIL_PASS_REQUIRED'},
        ],
    };
}
