import { ActionReducerMap } from "@ngrx/store";
import { UserState } from "./user.state";
import * as fromUser from "../reducers/user.reducer";

export interface State {
    users: UserState;
}

export const reducers: ActionReducerMap<State> = {
    users: fromUser.userReducer
};
