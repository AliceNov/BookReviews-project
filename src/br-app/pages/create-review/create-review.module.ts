import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateReviewComponent } from "./create-review/create-review.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { CreateReviewRoutingModule } from "./create-review-routing.module";



@NgModule({
  declarations: [
    CreateReviewComponent,
  ],
  imports: [
    CommonModule,
    CreateReviewRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CreateReviewModule { }
