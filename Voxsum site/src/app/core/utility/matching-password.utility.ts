import {FormGroup} from "@angular/forms";

export class MatchingFieldsUtility {

    static checkFields(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.notSame) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({notSame: true});
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

}
