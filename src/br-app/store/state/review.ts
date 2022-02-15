import { ActionReducerMap } from "@ngrx/store";
import * as fromReview from "../reducers/review.reducer";
import { ReviewState } from "./review.state";

export interface State {
    reviews: ReviewState;
}

export const reducers: ActionReducerMap<State> = {
    reviews: fromReview.reviewReducer
};
