export class ResetPasswordValidationMessages{
    static errorMessages = {
        originalPassword: [
            {type: 'required', message: 'Password is required'},
            {type: 'pattern', message: 'Your password must be atleast 8 characters long. It must contain at least one uppercase, one numeric digit and one special character.'}
        ],
        confirmPassword: [
            {type: 'required', message: 'Confirm password is required'},
            {type: 'pattern', message: 'Please enter a valid confirm password'},
            {type: 'notSame', message: 'Password and confirm password does not match'}
        ]
    }
}


