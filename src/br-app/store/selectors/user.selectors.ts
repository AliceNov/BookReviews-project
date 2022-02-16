import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, UserState } from "../state/user.state";

export const getSelectedUserId = (state: UserState): number => state.selectedUserId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllUsers = selectAll;
export const selectUserIds = selectIds;
export const selectUserEntities = selectEntities;

export const selectUserState = createFeatureSelector<UserState>("users");

  export const selectCurrentUserId = createSelector(
    selectUserState,
    getSelectedUserId,
  );

  export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrentUserId,
    (userEntities, userId) => userId && userEntities[userId],
  );
