import { RouterReducerState } from "@ngrx/router-store";
import { IBookState, initialBookState } from "./book.state";
import { initialReviewState, IReviewState } from "./review.state";
import { initialUserState, IUserState } from "./user.state";

export interface IBrAppState {
    router?: RouterReducerState;
    users: IUserState;
    books: IBookState;
    reviews: IReviewState;
}

export const initialBrAppState: IBrAppState = {
    users: initialUserState,
    books: initialBookState,
    reviews: initialReviewState
};

export function getInitialSate(): IBrAppState {
    return initialBrAppState;
}
