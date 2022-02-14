import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { Review, ReviewPageable } from "src/models/review.model";
import * as ReviewActions from "../actions/review.action";
import { ReviewState } from "../state/review.state";

export const adapter: EntityAdapter<Review | ReviewPageable> = createEntityAdapter<Review | ReviewPageable>();

export const initialState: ReviewState = adapter.getInitialState({
    selectedReviewId: null,
    reviews: null,
    review: null
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
   /* on(ReviewActions.getReviewSuccess, (state, action) => ({...state, review: action.review})),
    on(ReviewActions.getReviewsSuccess, (state, action) => ({...state, reviews: action.reviews})),
    on(ReviewActions.getReviewsByBookSuccess, (state, action) => ({...state, reviews: action.reviews})),
    on(ReviewActions.getReviewsByUserSuccess, (state, action) => ({...state, reviews: action.reviews}))*/
);

export const getSelectedReviewId = (state: ReviewState): number => state.selectedReviewId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllReviews = selectAll;
export const selectReviewIds = selectIds;
export const selectReviewEntities = selectEntities;
