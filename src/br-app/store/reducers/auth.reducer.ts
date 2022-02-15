import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { AuthLoginModel } from "src/models/auth.login.model";
import * as AuthActions from "../actions/auth.action";
import { AuthState } from "../state/auth.state";

export const adapter: EntityAdapter<AuthLoginModel> = createEntityAdapter<AuthLoginModel>();

export const initialState: AuthState = adapter.getInitialState({
    authLogin: null
});

export const authReducer = createReducer(
    initialState,
    on(AuthActions.getAuthUserSuccess, (state, action): AuthState => ({ ...state, authLogin: action.user })),
);
