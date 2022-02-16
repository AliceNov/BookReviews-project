import { createReducer, on } from "@ngrx/store";
import { adapter, UserState } from "../state/user.state";
import * as UserActions from "../actions/user.action";

export const initialState: UserState = adapter.getInitialState({
    selectedUserId: null
});

export const userReducer = createReducer(
    initialState,
    on(UserActions.deleteUser, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(UserActions.updateUser, (state, { id, user } ) => {
        return adapter.updateOne({ id, changes: user }, state );
    }),
);

