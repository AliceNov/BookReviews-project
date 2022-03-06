import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BookRoutingModule } from "./book-routing.module";
import { CreateEditComponent } from "./create-edit/create-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { BookHomeComponent } from "./book-home/book-home.component";


@NgModule({
  declarations: [
    BookHomeComponent,
    CreateEditComponent,
  ],
  imports: [
    BookRoutingModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class BookModule { }
