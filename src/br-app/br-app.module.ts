import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrAppComponent } from "./br-app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        BrAppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [BrAppComponent],
})
export class BrAppModule {
}
