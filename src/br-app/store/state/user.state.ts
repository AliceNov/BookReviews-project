import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { User, UserPageable } from "src/models/user.model";

export interface UserState extends EntityState<User | UserPageable> {
    selectedUserId: number | null;
    user: User;
    users: UserPageable;
}

export const adapter: EntityAdapter<User | UserPageable> = createEntityAdapter<User | UserPageable>();
