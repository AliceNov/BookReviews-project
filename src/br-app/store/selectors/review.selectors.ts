import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromReview from "../reducers/review.reducer";
import { ReviewState } from "../state/review.state";



export const selectReviewState = createFeatureSelector<ReviewState>("reviews");

export const selectReviewIds = createSelector(
    selectReviewState,
    fromReview.selectReviewIds,
);

export const selectAllReviews = createSelector(
    selectReviewState,
    fromReview.selectAllReviews,
);

export const selectReviewEntities = createSelector(
    selectReviewState,
    fromReview.selectReviewEntities,
  );

  export const selectCurrentReviewId = createSelector(
    selectReviewState,
    fromReview.getSelectedReviewId,
  );

  export const selectCurrentUser = createSelector(
    selectReviewEntities,
    selectCurrentReviewId,
    (reviewEntities, reviewId) => reviewId && reviewEntities[reviewId],
  );
