import { Review } from "./review.model";

export interface User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    role?: UserRole;
    review?: Review[];
}

export enum UserRole {
    ADMIN = "admin",
    USER = "user"
}
