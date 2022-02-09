import { Book } from "./book.model";
import { User } from "./user.model";

export interface Review {
    id?: number;
    body?: string;
    created?: Date;
    updated?: Date;
    publishedDate?: Date;
    isPublished?: boolean;
    author?: User;
    book?: Book;
}
