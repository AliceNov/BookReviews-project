import { EntityState } from "@ngrx/entity";
import { User, UserPageable } from "src/models/user.model";

export interface UserState extends EntityState<User | UserPageable> {
    selectedUserId: number | null;
}
