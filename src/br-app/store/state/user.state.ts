import { User } from "src/models/user.model";

export interface IUserState {
    users: User[];
    user: User;
}

export const initialUserState: IUserState = {
    users: null,
    user: null
};
