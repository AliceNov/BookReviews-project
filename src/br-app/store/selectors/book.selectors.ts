import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromBook from "../reducers/book.reducer";
import { BookState } from "../state/book.state";

export const selectBookState = createFeatureSelector<BookState>("books");

export const selectBookIds = createSelector(
    selectBookState,
    fromBook.selectBookIds,
);

export const selectAllBooks = createSelector(
    selectBookState,
    fromBook.selectAllBooks,
);

export const selectBookEntities = createSelector(
    selectBookState,
    fromBook.selectBookEntities,
  );

  export const selectCurrentBookId = createSelector(
    selectBookState,
    fromBook.getSelectedBookId,
  );

  export const selectCurrentBook = createSelector(
    selectBookEntities,
    selectCurrentBookId,
    (bookEntities, bookId) => bookId && bookEntities[bookId],
  );
