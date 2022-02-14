import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { User, UserPageable } from "src/models/user.model";
import { UserState } from "../state/user.state";
import * as UserActions from "../actions/user.action";

export const adapter: EntityAdapter<User | UserPageable> = createEntityAdapter<User | UserPageable>();

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

export const getSelectedUserId = (state: UserState): number => state.selectedUserId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllUsers = selectAll;
export const selectUserIds = selectIds;
export const selectUserEntities = selectEntities;
