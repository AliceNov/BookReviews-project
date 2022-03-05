import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { AuthLoginModel } from "src/models/auth.login.model";
import { TokenModel } from "src/models/token.model";
import { User } from "src/models/user.model";

export interface AuthState extends EntityState<AuthLoginModel> {
    authLogin: User;
    token: TokenModel;
}
export const adapter: EntityAdapter<AuthLoginModel> = createEntityAdapter<AuthLoginModel>();
