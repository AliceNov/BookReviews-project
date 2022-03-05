import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserProfileRoutingModule } from "./profile-routing.module";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { ReviewTableComponent } from "./review-table/review-table.component";
import { UserSettingsComponent } from "./user-settings/user-settings.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UsersTableComponent } from "./users-table/users-table.component";



@NgModule({
  declarations: [
    ReviewTableComponent,
    UserProfileComponent,
    UserSettingsComponent,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
