import { createAction, props } from "@ngrx/store";
import { AuthLoginModel } from "src/models/auth.login.model";
import { TokenModel } from "src/models/token.model";
import { User } from "src/models/user.model";

export enum EAuthActions {
    LOGIN = "[AUTH] Login",
    LOGIN_SUCCESS = "[AUTH] Login Success",

    GET_AUTH_USER = "[AUTH] Get Auth User",
    GET_AUTH_USER_SUCCESS = "[AUTH] Get Auth User Success",

    LOGOUT = "[AUTH] Logout",
    LOGOUT_SUCCESS = "[AUTH] Logout Success",

    SIGNUP = "[AUTH] SignUp",
    SIGNUP_SUCCESS = "[AUTH] SignUp Success"
}

export const login = createAction(EAuthActions.LOGIN, props<{ loginModel: AuthLoginModel }>());
export const loginSuccess = createAction(EAuthActions.LOGIN_SUCCESS, props<{ token: TokenModel }>());
export const getAuthUser = createAction(EAuthActions.GET_AUTH_USER);
export const getAuthUserSuccess = createAction(EAuthActions.GET_AUTH_USER_SUCCESS, props<{ user: User }>());
export const logout = createAction(EAuthActions.LOGOUT);
export const logoutSuccess = createAction(EAuthActions.LOGOUT_SUCCESS);
export const signUp = createAction(EAuthActions.SIGNUP, props<{ user: User }>());
export const signUpSuccess = createAction(EAuthActions.SIGNUP_SUCCESS, props<{ user: User }>());
