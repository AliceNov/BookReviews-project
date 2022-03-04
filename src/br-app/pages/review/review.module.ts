import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReviewRoutingModule } from "./review-routing.module";
import { ReviewHomeComponent } from "./review-home/review-home.component";
import { MaterialModule } from "src/br-app/modules/material/material.module";


@NgModule({
  declarations: [
    ReviewHomeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReviewRoutingModule,
  ]
})
export class ReviewModule { }
