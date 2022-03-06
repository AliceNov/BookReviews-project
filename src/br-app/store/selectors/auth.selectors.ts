import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../state/auth.state";

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthLogin = createSelector(
    selectAuthState,
    (state: AuthState) => state.authLogin,
);


export const selectTokenLogin = createSelector(
    selectAuthState,
    (state: AuthState) => state.token,
);
