import { ActionReducerMap } from "@ngrx/store";
import * as fromBook from "./reducers/book.reducer";
import * as fromReview from "./reducers/review.reducer";
import * as fromUser from "./reducers/user.reducer";
import * as fromAuth from "./reducers/auth.reducer";
import { AuthState } from "./state/auth.state";
import { BookState } from "./state/book.state";
import { ReviewState } from "./state/review.state";
import { UserState } from "./state/user.state";

export interface AppState {
    books: BookState;
    reviews: ReviewState;
    users: UserState;
    auth: AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
    books: fromBook.bookReducer,
    reviews: fromReview.reviewReducer,
    users: fromUser.userReducer,
    auth: fromAuth.authReducer
};
