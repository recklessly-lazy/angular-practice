import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailComponent } from "./book-detail/book-detail.component";
import { BookComponent } from "./book/book.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./login/login.guard";
// import { DashboardComponent } from "./dashboard/dashboard.component";
// import { BookDetailComponent } from "./book-detail/book-detail.component";
// import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
const appRoutes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "books", component: BookComponent, canActivate: [LoginGuard] },
    { path: "", redirectTo: "books", pathMatch: "full" },
    {
        path: "books/:id",
        component: BookDetailComponent,
        canActivate: [LoginGuard],
    },
    { path: "**", component: ErrorComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
