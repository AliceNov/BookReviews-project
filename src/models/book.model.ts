import { Review } from "./review.model";

export interface Book {
    id?: number;
    title?: string;
    author?: string;
    description?: string;
    publishedDate?: Date;
    cover?: string;
    review?: Review[];
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

export interface BookPageable {
    items: Book[];
    meta: Meta;
    links: Links;
}
