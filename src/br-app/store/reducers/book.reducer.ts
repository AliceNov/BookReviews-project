import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Book, BookPageable } from "src/models/book.model";
import * as BookActions from "../actions/book.action";
import { BookState } from "../state/book.state";

export const adapter: EntityAdapter<Book | BookPageable> = createEntityAdapter<Book | BookPageable>();

export const initialState: BookState = adapter.getInitialState({
    selectedBookId: null,
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
);

export const getSelectedBookId = (state: BookState): number => state.selectedBookId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllBooks = selectAll;
export const selectBookIds = selectIds;
export const selectBookEntities = selectEntities;
