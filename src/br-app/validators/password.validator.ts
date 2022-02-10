import { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordValidators = {
    passwordMatch (control: AbstractControl): ValidationErrors {
        const password = control.get("password").value;
        const cpassword = control.get("cpassword").value;

        if ((password === cpassword) && (password !== "" && cpassword !== "")) {
            return null;
        }
            return {
                passwordNotMatch: true
            };

    },

    passwordPattern : {
        "password": "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$"
    },
};
