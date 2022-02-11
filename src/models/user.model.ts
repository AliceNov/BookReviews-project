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

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    tottalPages: number;
    currentPage: number;
}

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface UserPageable {
    items: User[];
    meta: Meta;
    links: Links;
}
