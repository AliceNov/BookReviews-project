import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home/home.component";

const routes: Routes = [
    { path: "review", loadChildren: () => import("./pages/review/review.module").then((m) => m.ReviewModule) },
    { path: "book", loadChildren: () => import("./pages/book/book.module").then((m) => m.BookModule) },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then((m) => m.LoginModule) },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", pathMatch: "full", component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BrAppRoutingModule {}
