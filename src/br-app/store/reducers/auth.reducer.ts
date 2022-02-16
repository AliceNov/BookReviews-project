import { createReducer, on } from "@ngrx/store";
import * as AuthActions from "../actions/auth.action";
import { adapter, AuthState } from "../state/auth.state";

export const initialState: AuthState = adapter.getInitialState({
    authLogin: null
});

export const authReducer = createReducer(
    initialState,
    on(AuthActions.getAuthUserSuccess, (state, action): AuthState => ({ ...state, authLogin: action.user })),
);
