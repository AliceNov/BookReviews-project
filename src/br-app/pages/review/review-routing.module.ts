import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReviewHomeComponent } from "./review-home/review-home.component";

const routes: Routes = [
  { path: "", component: ReviewHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
