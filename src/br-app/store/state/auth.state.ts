import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { AuthLoginModel } from "src/models/auth.login.model";
import { User } from "src/models/user.model";

export interface AuthState extends EntityState<AuthLoginModel> {
    authLogin: User;
}
export const adapter: EntityAdapter<AuthLoginModel> = createEntityAdapter<AuthLoginModel>();
