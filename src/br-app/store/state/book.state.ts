import { Book, BookPageable } from "src/models/book.model";

export interface IBookState {
    books: BookPageable;
    book: Book;
}

export const initialBookState: IBookState = {
    books: null,
    book: null
};
