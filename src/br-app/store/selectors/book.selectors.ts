import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, BookState } from "../state/book.state";

export const getSelectedBookId = (state: BookState): number => state.selectedBookId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllBooks = selectAll;
export const selectBookIds = selectIds;
export const selectBookEntities = selectEntities;

export const selectBookState = createFeatureSelector<BookState>("books");



  export const selectCurrentBookId = createSelector(
    selectBookState,
    getSelectedBookId,
  );

  export const selectCurrentBook = createSelector(
    selectBookEntities,
    selectCurrentBookId,
    (bookEntities, bookId) => bookId && bookEntities[bookId],
  );
