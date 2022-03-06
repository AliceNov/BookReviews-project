import { createReducer, on } from "@ngrx/store";
import { adapter, UserState } from "../state/user.state";
import * as UserActions from "../actions/user.action";

export const initialState: UserState = adapter.getInitialState({
    selectedUserId: null,
    user: null,
    users: null
});

export const userReducer = createReducer(
    initialState,
    on(UserActions.deleteUser, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(UserActions.updateUser, (state, { id, user } ) => {
        return adapter.updateOne({ id, changes: user }, state );
    }),
    on(UserActions.getUserSuccess, (state, action): UserState => ({ ...state, user: action.user })),
    on(UserActions.getUsersSuccess, (state, action): UserState => ({ ...state, users: action.users })),
);

