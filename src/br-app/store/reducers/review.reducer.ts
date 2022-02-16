import { createReducer, on } from "@ngrx/store";
import * as ReviewActions from "../actions/review.action";
import { adapter, ReviewState } from "../state/review.state";



export const initialState: ReviewState = adapter.getInitialState({
    selectedReviewId: null,
});

export const reviewReducer = createReducer(
    initialState,
    on(ReviewActions.addReview, (state, action) => {
        return adapter.addOne({ book: action.book, ...action.review }, state);
    }),
    on(ReviewActions.deleteReview, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(ReviewActions.updateReview, (state, { id, review }) => {
        return adapter.updateOne({ id, changes: review }, state);
    }),
);


