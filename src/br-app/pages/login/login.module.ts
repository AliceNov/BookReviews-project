import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./components/login.component";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
