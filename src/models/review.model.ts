import { Book } from "./book.model";
import { User } from "./user.model";

export interface Review {
    id?: number;
    title?: string;
    body?: string;
    created?: Date;
    updated?: Date;
    publishedDate?: Date;
    isPublished?: boolean;
    author?: User;
    book?: Book;
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

export interface ReviewPageable {
    items: Review[];
    meta: Meta;
    links: Links;
}

