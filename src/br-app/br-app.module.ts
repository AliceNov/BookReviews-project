import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrAppComponent } from "./br-app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderModule } from "./modules/header/header.module";
import { FooterModule } from "./modules/footer/footer.module";
import { MaterialModule } from "./modules/material/material.module";
import { BrAppRoutingModule } from "./br-app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { LoginModule } from "./pages/login/login.module";

@NgModule({
    declarations: [
        BrAppComponent,
    ],
    imports: [
        BrAppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,

        FooterModule,
        FormsModule,
        HeaderModule,
        HttpClientModule,

        LoginModule,

        MaterialModule,
    ],
    providers: [],
    bootstrap: [BrAppComponent],
})
export class BrAppModule {
}
