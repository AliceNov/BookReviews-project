import { Review, ReviewPageable } from "src/models/review.model";

export interface IReviewState {
    reviews: ReviewPageable;
    review: Review;
}

export const initialReviewState: IReviewState = {
    reviews: null,
    review: null
};
