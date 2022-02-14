import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from "../reducers/user.reducer";
import { UserState } from "../state/user.state";

export interface State {
    users: UserState;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUser.userReducer
};

export const selectUserState = createFeatureSelector<UserState>("users");

export const selectUserIds = createSelector(
    selectUserState,
    fromUser.selectUserIds,
);

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.selectAllUsers,
);

export const selectUserEntities = createSelector(
    selectUserState,
    fromUser.selectUserEntities,
  );

  export const selectCurrentUserId = createSelector(
    selectUserState,
    fromUser.getSelectedUserId,
  );

  export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userId && userEntities[userId],
  );
