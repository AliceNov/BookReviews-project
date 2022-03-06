import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookCardComponent } from "./book-card/book-card.component";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { BookCardRoutingModule } from "./card-routing.module";



@NgModule({
  declarations: [
    BookCardComponent,
  ],
  imports: [
    BookCardRoutingModule,
    CommonModule,
    MaterialModule,
  ]
})
export class BookCardModule { }
