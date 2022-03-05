import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home/home.component";

const routes: Routes = [
    { path: "reviews", loadChildren: () => import("./pages/review/review.module").then((m) => m.ReviewModule) },
    { path: "books", loadChildren: () => import("./pages/book/book.module").then((m) => m.BookModule) },
    { path: "login", loadChildren: () => import("./pages/login/login.module").then((m) => m.LoginModule) },
    { path: "book-card/:id", loadChildren: () => import("./pages/book-card/book-card.module").then((m) => m.BookCardModule) },
    { path: "profile", loadChildren: () => import("./pages/user-profile/user-profile.module").then((m) => m.UserProfileModule) },
    { path: "create-review/:id", loadChildren: () => import("./pages/create-review/create-review.module").then((m) => m.CreateReviewModule) },
    { path: "edit-review/:id", loadChildren: () => import("./pages/edit-review/edit-review.module").then((m) => m.EditReviewModule) },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", pathMatch: "full", component: HomeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BrAppRoutingModule {}
