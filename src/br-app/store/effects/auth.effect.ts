import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, of } from "rxjs";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import * as AuthActions from "../actions/auth.action";

@Injectable({
    providedIn: "root"
})
export class AuthEffects {

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            exhaustMap(({ loginModel }) =>
                this.authService.login(loginModel).pipe(
                    map((data) => {
                        return AuthActions.loginSuccess({
                            token: data
                        });
                    }),
                ),
            ),
        );
    });

    getAuthUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.getAuthUser),
            exhaustMap(() =>
               this.authService.getAuthUser().pipe(
                   map((data) => {
                       return AuthActions.getAuthUserSuccess({
                           user: data
                       });
                   }),
               ),
            ),
        );
    });

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.logout),
            mergeMap(() => {
                this.authService.logout();
                return of(AuthActions.logoutSuccess());
            }),
        );
    });

    signUp$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.signUp),
            exhaustMap(({ user }) =>
                this.authService.signUp(user).pipe(
                    map((data) => {
                        return AuthActions.signUpSuccess({
                            user: data
                        });
                    }),
                ),
            ),
        );
    });

    constructor(
        private authService: AuthenticationService,
        private actions$: Actions,
    ){}
}
