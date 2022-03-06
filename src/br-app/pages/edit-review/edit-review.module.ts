import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { EditReviewComponent } from "./edit-review/edit-review.component";
import { EditReviewRoutingModule } from "./edit-review-routing.module";



@NgModule({
  declarations: [
    EditReviewComponent,
  ],
  imports: [
    CommonModule,
    EditReviewRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class EditReviewModule { }
