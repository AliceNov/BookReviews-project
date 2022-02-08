import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

const materialComponents = [
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents,
  ],
  exports: [ materialComponents ]
})
export class MaterialModule { }
