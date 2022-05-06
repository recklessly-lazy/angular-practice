import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: "root",
})
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private loginService: LoginService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log(`inside can activate..`)
        console.log(`state: ${state.toString()}`);
        if (this.loginService.isUserLoggedIn()) {
            return true;
        }
        console.log(`user not logged in`);
        this.router.navigate(["/login"]);
        return false;
    }
}
