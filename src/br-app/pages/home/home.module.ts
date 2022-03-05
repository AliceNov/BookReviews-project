import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home/home.component";
import { CardComponent } from "./card/card.component";
import { MaterialModule } from "src/br-app/modules/material/material.module";
import { HomeBookComponent } from "./home-book/home-book.component";


@NgModule({
  declarations: [
    CardComponent,
    HomeBookComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
