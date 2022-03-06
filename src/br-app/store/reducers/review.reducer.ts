import { createReducer, on } from "@ngrx/store";
import * as ReviewActions from "../actions/review.action";
import { adapter, ReviewState } from "../state/review.state";



export const initialState: ReviewState = adapter.getInitialState({
    selectedReviewId: null,
    review: null,
    reviews: null,
    reviewByUser: null,
    reviewByBook: null
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
    on(ReviewActions.getReviewSuccess, (state, action): ReviewState => ({ ...state, review: action.review })),
    on(ReviewActions.getReviewsSuccess, (state, action): ReviewState => ({ ...state, reviews: action.reviews })),
    on(ReviewActions.getReviewsByBookSuccess, (state, action): ReviewState => ({ ...state, reviewByBook: action.reviews })),
    on(ReviewActions.getReviewsByUserSuccess, (state, action): ReviewState => ({ ...state, reviewByUser: action.reviews })),
);


