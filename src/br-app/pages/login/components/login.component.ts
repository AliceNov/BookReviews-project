import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { signUp } from "src/br-app/store/actions/auth.action";
import { passwordValidators } from "src/br-app/validators/password.validator";
import { validation } from "src/br-app/validators/patterns-validators.validator";
import { User } from "src/models/user.model";
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

  public signUpUser: User;

  public validMessage = validation.errorMessage;

  constructor(private fb: FormBuilder,
              public formFieldValid: FormFieldValid,
              private store: Store,
              private router: Router,
              private cf: ChangeDetectorRef) { }

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
    if (this.signUpForm.valid) {
      this.signUpUser = {
        name: this.signUpForm.get("name").value,
        username: this.signUpForm.get("username").value,
        email: this.signUpForm.get("email").value,
        password: this.signUpForm.get("password").value
      };
      this.store.dispatch(signUp({ user: this.signUpUser }));
      this.router.navigate(["/home"]);
      this.cf.detectChanges();
    }
  }

}
