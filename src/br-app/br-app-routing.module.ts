import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: "home", loadChildren: () => import("./pages/home/home.module").then((m) => m.HomeModule) },
    { path: "review", loadChildren: () => import("./pages/review/review.module").then((m) => m.ReviewModule) },
    { path: "book", loadChildren: () => import("./pages/book/book.module").then((m) => m.BookModule) },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then((m) => m.LoginModule) },
    { path: "", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BrAppRoutingModule {}
