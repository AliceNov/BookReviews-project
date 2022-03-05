import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/br-app/services/user/user.service";
import * as UserActions from "../actions/user.action";
import { map, mergeMap, of } from "rxjs";
import { User, UserPageable } from "src/models/user.model";

@Injectable({
    providedIn: "root"
  })
export class UserEffects {

    getUser$ = createEffect(() => {
    return this.actions$.pipe(
            ofType(UserActions.getUser),
            mergeMap(({ id }) =>
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
            mergeMap(({ id, user, form }) => {
                this.userService.updateOne(id, user, form);
                 return of(UserActions.updateUserSuccess());
            },

            ),
        );
    });

    deleteUser$ = createEffect(() => {
    return this.actions$.pipe(
            ofType(UserActions.deleteUser),
            mergeMap(({ id }) => {
                this.userService.delete(id);
                return of(UserActions.deleteUserSuccess());
            }),
        );
    },
    );

    constructor(
        private actions$: Actions,
        private userService: UserService,
    ){}
}
