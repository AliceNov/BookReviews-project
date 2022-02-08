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
