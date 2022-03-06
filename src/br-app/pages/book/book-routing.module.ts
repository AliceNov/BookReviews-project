import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookHomeComponent } from "./book-home/book-home.component";
import { CreateEditComponent } from "./create-edit/create-edit.component";

const routes: Routes = [

  {
    path: "",
    component: BookHomeComponent,
    children: [
      { path: "create", component: CreateEditComponent },
      { path: "edit", component: CreateEditComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
