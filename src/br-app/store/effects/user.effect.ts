import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/br-app/services/user/user.service";
import * as UserActions from "../actions/user.action";
import { exhaustMap, map, mergeMap } from "rxjs";
import { User, UserPageable } from "src/models/user.model";

@Injectable({
    providedIn: "root"
  })
export class UserEffects {

    getUser$ = createEffect(() => {
    return this.actions$.pipe(
            ofType(UserActions.getUser),
            exhaustMap(({ id }) =>
                this.userService.findOne(id).pipe(
                    map((data: User) => {
                        return UserActions.getUserSuccess({
                            user: data
                        });
                    }),
                ),
            ),
        );
},
    );

    getUsers$ = createEffect(() => {
    return this.actions$.pipe(
            ofType(UserActions.getUsers),
            mergeMap(({ page, limit }) =>
                this.userService.indexAll(page, limit).pipe(
                    map((data: UserPageable) => {
                        return UserActions.getUsersSuccess({
                            users: data
                        });
                    }),
                ),
            ),
        );
    });

    updateUser$ = createEffect(() => {
     return this.actions$.pipe(
            ofType(UserActions.updateUser),
            exhaustMap(({ id, user }) =>
                this.userService.updateOne(id, user).pipe(
                    map((data: User) => {
                        return UserActions.updateUserSuccess({
                            user: data
                    });
                }),
                ),
            ),
        );
    });

    deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
            ofType(UserActions.deleteUser),
            exhaustMap(({ id }) =>
                this.userService.delete(id).pipe(
                    map(() => {
                        return UserActions.deleteUserSuccess();
                    }),
                ),
            ),
        );
    },
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ){}
}
