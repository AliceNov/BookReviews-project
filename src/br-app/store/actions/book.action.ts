import { createAction, props, union } from "@ngrx/store";
import { Book, BookPageable } from "src/models/book.model";

export enum EBookActions {
    ADD_BOOK = "[Book] Add Book",
    ADD_BOOK_SUCCESS = "[Book] Add Book Success",

    GET_BOOKS = "[Book] Get Books",
    GET_BOOKS_SUCCESS = "[Book] Get Books Success",

    GET_BOOKS_BY_REVIEW = "[Book] Get Books By User",
    GET_BOOKS_BY_REVIEW_SUCCESS = "[Book] Get Books Success By User",

    GET_BOOK = "[Book] Get Book",
    GET_BOOK_SUCCESS = "[Book] Get Book Success",

    UPDATE_BOOK = "[Book] Update Book",
    DELETE_BOOK = "[Book] Delete Book"
}

export const addBook = createAction(EBookActions.ADD_BOOK, props<{ book: Book }>());
export const addBookSuccess = createAction(EBookActions.ADD_BOOK_SUCCESS, props<{ book: Book }>());
export const getBooks = createAction(EBookActions.GET_BOOKS, props<{ page: number, limit: number }>());
export const getBooksSuccess = createAction(EBookActions.GET_BOOKS_SUCCESS, props<{ books: BookPageable }>());
export const getBooksByReview = createAction(EBookActions.GET_BOOKS_BY_REVIEW, props<{ reviewId: number, page: number, limit: number }>());
export const getBooksByReviewSuccess = createAction(EBookActions.GET_BOOKS_BY_REVIEW_SUCCESS, props<{ books: BookPageable }>());
export const getBook = createAction(EBookActions.GET_BOOK, props<{ id: number }>());
export const getBookSuccess = createAction(EBookActions.GET_BOOK_SUCCESS, props<{ book: Book }>());
export const updateBook = createAction(EBookActions.UPDATE_BOOK, props<{ id: number, book: Book }>());
export const deleteBook = createAction(EBookActions.DELETE_BOOK, props<{ id: number }>());

const _bookAction = union({
    addBook,
    addBookSuccess,
    getBook,
    getBookSuccess,
    getBooks,
    getBooksSuccess,
    getBooksByReview,
    getBooksByReviewSuccess,
    updateBook,
    deleteBook
});

export type BookActions = typeof _bookAction;
