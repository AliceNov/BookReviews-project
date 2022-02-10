import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { passwordValidators } from "src/br-app/validators/password.validator";
import { validation } from "src/br-app/validators/patterns-validators.validator";
import { FormFieldValid } from "../../../validators/form-field-valide";

@Component({
  selector: "br-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  public signUpForm: FormGroup;

  public validMessage = validation.errorMessage;

  constructor(private fb: FormBuilder,
              public formFieldValid: FormFieldValid) { }

  ngOnInit(): void {
    this.createSignInForm();
    this.createSignUpForm();
  }

  createSignInForm(): void {
    this.signInForm = this.fb.group({
      email: ["", [
        Validators.required,
        Validators.minLength(9),
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]]
    });
  }

  createSignUpForm(): void {
    this.signUpForm = this.fb.group({
      name: ["", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]],
      username: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]],
      email: ["", [
        Validators.required,
        Validators.minLength(9),
        Validators.pattern(validation.patternsValidators.email),
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern(passwordValidators.passwordPattern.password),
      ]],
      cpassword: ["", [
        Validators.required,
      ]]
    }, {
        validators: passwordValidators.passwordMatch
    });
  }

  signIn(): void {

  }

  signUp(): void {

  }

}
