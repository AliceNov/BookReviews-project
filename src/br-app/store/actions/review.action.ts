import { createAction, props } from "@ngrx/store";
import { Book } from "src/models/book.model";
import { Review, ReviewPageable } from "src/models/review.model";

export enum EReviewActions {
    ADD_REVIEW = "[Review] Add Review",
    ADD_REVIEW_SUCCESS = "[Review] Add Review Success",

    GET_REVIEWS = "[Review] Get Reviews",
    GET_REVIEWS_SUCCESS = "[Review] Get Reviews Success",

    GET_REVIEWS_BY_USER = "[Review] Get Reviews By User",
    GET_REVIEWS_BY_USER_SUCCESS = "[Review] Get Reviews Success By User",

    GET_REVIEWS_BY_BOOK = "[Review] Get Reviews By Book",
    GET_REVIEWS_BY_BOOK_SUCCESS = "[Review] Get Reviews By Book Success",

    GET_REVIEW = "[Review] Get Review",
    GET_REVIEW_SUCCESS = "[Review] Get Review Success",

    UPDATE_REVIEW = "[Review] Update Review",
    UPDATE_REVIEW_SUCCESS = "[Review] Update Review Success",
    DELETE_REVIEW = "[Review] Delete Review",
    DELETE_REVIEW_SUCCESS = "[Review] Delete Review Success",
}

export const addReview = createAction(EReviewActions.ADD_REVIEW, props<{ book: Book, review: Review }>());
export const addReviewSuccess = createAction(EReviewActions.ADD_REVIEW_SUCCESS, props<{ review: Review }>());
export const getReviews = createAction(EReviewActions.GET_REVIEWS, props<{ page: number, limit: number }>());
export const getReviewsSuccess = createAction(EReviewActions.GET_REVIEWS_SUCCESS, props<{ reviews: ReviewPageable }>());
export const getReviewsByUser = createAction(EReviewActions.GET_REVIEWS_BY_USER, props<{ userId: number, page: number, limit: number }>());
export const getReviewsByUserSuccess = createAction(EReviewActions.GET_REVIEWS_BY_USER_SUCCESS, props<{ reviews: ReviewPageable }>());
export const getReviewsByBook = createAction(EReviewActions.GET_REVIEWS_BY_BOOK, props<{ bookId: number, page: number, limit: number }>());
export const getReviewsByBookSuccess = createAction(EReviewActions.GET_REVIEWS_BY_BOOK_SUCCESS, props<{ reviews: ReviewPageable }>());
export const getReview = createAction(EReviewActions.GET_REVIEW, props<{ id: number }>());
export const getReviewSuccess = createAction(EReviewActions.GET_REVIEW_SUCCESS, props<{ review: Review }>());
export const updateReview = createAction(EReviewActions.UPDATE_REVIEW, props<{ id: number, review: Review }>());
export const updateReviewSuccess = createAction(EReviewActions.UPDATE_REVIEW_SUCCESS, props<{ review: Review }>());
export const deleteReview = createAction(EReviewActions.DELETE_REVIEW, props<{ id: number }>());
export const deleteReviewSuccess = createAction(EReviewActions.DELETE_REVIEW_SUCCESS);
