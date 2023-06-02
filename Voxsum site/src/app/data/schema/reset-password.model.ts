/**
 * Reset password API payload
 */
export class ResetPasswordModel {
      token:string;
      email:string;
      password: Passwords
    constructor(token: string, email: string, passwords: { originalPassword: string, confirmPassword: string }) {
        this.token= token;
        this.email = email;
        this.password = new Passwords(passwords.originalPassword,passwords.confirmPassword);
    }
}

export class Passwords {
    originalPassword:string;
    confirmPassword:string;
    constructor(originalPassword:string,confirmPassword:string) {
        this.originalPassword = btoa(originalPassword);
        this.confirmPassword = btoa(confirmPassword);
    }
}
