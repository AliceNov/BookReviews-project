import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "br-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
      ]],
      password: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]],
      cpassword: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]]
    });
  }

  signIn(): void {

  }

  signUp(): void {

  }

}
