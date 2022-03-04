import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookCardComponent } from "./book-card/book-card.component";

const routes: Routes = [

  {
    path: "",
    component: BookCardComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookCardRoutingModule { }
