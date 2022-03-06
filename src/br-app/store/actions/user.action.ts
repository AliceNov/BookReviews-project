import { createAction, props } from "@ngrx/store";
import { User, UserPageable } from "src/models/user.model";

export enum EUserActions {
    GET_USERS = "[User] Get Users",
    GET_USERS_SUCCESS = "[User] Get Users Success",

    GET_USER = "[User] Get User",
    GET_USER_SUCCESS = "[User] Get User Success",

    UPDATE_USER = "[User] Update User",
    UPDATE_USER_SUCCESS = "[User] Update User SUCCESS",
    DELETE_USER = "[User] Delete User",
    DELETE_USER_SUCCESS = "[User] Delete User SUCCESS"
}

export const getUsers = createAction(EUserActions.GET_USERS, props<{ page: number, limit: number }>());
export const getUsersSuccess = createAction(EUserActions.GET_USERS_SUCCESS, props<{ users: UserPageable }>());
export const getUser = createAction(EUserActions.GET_USER, props<{ id: number }>());
export const getUserSuccess = createAction(EUserActions.GET_USER_SUCCESS, props<{ user: User }>());
export const updateUser = createAction(EUserActions.UPDATE_USER, props<{ id: number, user: User, form: FormData }>());
export const updateUserSuccess = createAction(EUserActions.UPDATE_USER_SUCCESS);
export const deleteUser = createAction(EUserActions.DELETE_USER, props<{ id: number }>());
export const deleteUserSuccess = createAction(EUserActions.DELETE_USER_SUCCESS);
