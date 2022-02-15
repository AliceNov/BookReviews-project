import { ActionReducerMap } from "@ngrx/store";
import { BookState } from "./book.state";
import * as fromBook from "../reducers/book.reducer";

export interface State {
    reviews: BookState;
}

export const reducers: ActionReducerMap<State> = {
    reviews: fromBook.bookReducer
};
