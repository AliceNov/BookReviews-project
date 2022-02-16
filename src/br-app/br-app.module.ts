import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrAppComponent } from "./br-app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderModule } from "./modules/header/header.module";
import { FooterModule } from "./modules/footer/footer.module";
import { MaterialModule } from "./modules/material/material.module";
import { BrAppRoutingModule } from "./br-app-routing.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoginModule } from "./pages/login/login.module";
import { HomeModule } from "./pages/home/home.module";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store";
import { ReviewEffects } from "./store/effects/review.effect";
import { BookEffects } from "./store/effects/book.effect";
import { UserEffects } from "./store/effects/user.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { AuthEffects } from "./store/effects/auth.effect";
import { AppInterceptor } from "./interceptors/app.interceptor";

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
        HomeModule,

        HttpClientModule,
        LoginModule,

        MaterialModule,

        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([AuthEffects, BookEffects, ReviewEffects, UserEffects]),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptor,
            multi: true
        },
    ],
    bootstrap: [BrAppComponent],
})
export class BrAppModule {
}
