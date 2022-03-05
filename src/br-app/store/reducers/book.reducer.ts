import { createReducer, on } from "@ngrx/store";
import * as BookActions from "../actions/book.action";
import { adapter, BookState } from "../state/book.state";


export const initialState: BookState = adapter.getInitialState({
    selectedBookId: null,
    book: null,
    books: null
});

export const bookReducer = createReducer(
    initialState,
    on(BookActions.addBook, (state, action) => {
        return adapter.addOne({ ...action.book }, state);
    }),
    on(BookActions.deleteBook, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(BookActions.updateBook, (state, { id, book }) => {
        return adapter.updateOne({ id, changes: book }, state);
    }),
    on(BookActions.getBookSuccess, (state, action): BookState => ({ ...state, book: action.book })),
    on(BookActions.getBooksSuccess, (state, action): BookState => ({ ...state, books: action.books })),
);
