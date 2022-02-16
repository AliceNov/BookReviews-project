import { createFeatureSelector, createSelector } from "@ngrx/store";
import { adapter, ReviewState } from "../state/review.state";

export const getSelectedReviewId = (state: ReviewState): number => state.selectedReviewId;

const {
    selectIds,
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const selectAllReviews = selectAll;
export const selectReviewIds = selectIds;
export const selectReviewEntities = selectEntities;

export const selectReviewState = createFeatureSelector<ReviewState>("reviews");

export const selectCurrentReviewId = createSelector(
  selectReviewState,
  getSelectedReviewId,
);

export const selectCurrentUser = createSelector(
  selectReviewEntities,
  selectCurrentReviewId,
  (reviewEntities, reviewId) => reviewId && reviewEntities[reviewId],
);
