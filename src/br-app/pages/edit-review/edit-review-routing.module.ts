import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditReviewComponent } from "./edit-review/edit-review.component";

const routes: Routes = [

  {
    path: "",
    component: EditReviewComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditReviewRoutingModule { }
