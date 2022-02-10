import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Injectable({
    providedIn: "root"
})
export class FormFieldValid {
    isFieldValid(form: AbstractControl, type: string): boolean {
        return form.hasError(type) && (form.dirty || form.touched);
    }
}
