import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, of } from "rxjs";
import { ReviewService } from "src/br-app/services/review/review.service";
import { Review, ReviewPageable } from "src/models/review.model";
import * as ReviewActions from "../actions/review.action";

@Injectable({
    providedIn: "root"
})
export class ReviewEffects {

    getReview$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.getReview),
            exhaustMap(({ id }) =>
                this.reviewService.findOne(id).pipe(
                    map((data: Review) => {
                        return ReviewActions.getReviewSuccess({
                            review: data
                        });
                    }),
                ),
            ),
        );
},
    );

    getReviewsByBook$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.getReviewsByBook),
            mergeMap(({ bookId, page, limit }) =>
                this.reviewService.indexByBook(bookId, page, limit).pipe(
                    map((data: ReviewPageable) => {
                        return ReviewActions.getReviewsByBookSuccess({
                            reviews: data
                        });
                    }),
                ),
            ),
        );
},
    );

    getReviewsByUser$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.getReviewsByUser),
            mergeMap(({ userId, page, limit }) =>
                this.reviewService.indexByUser(userId, page, limit).pipe(
                    map((data: ReviewPageable) => {
                        return ReviewActions.getReviewsByUserSuccess({
                            reviews: data
                        });
                    }),
                ),
            ),
        );
},
    );

    getReviews$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.getReviews),
            mergeMap(({ page, limit }) =>
                this.reviewService.indexAll(page, limit).pipe(
                    map((data: ReviewPageable) => {
                        return ReviewActions.getReviewsSuccess({
                            reviews: data
                        });
                    }),
                ),
            ),
        );
},
    );

    addReview$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.addReview),
            exhaustMap(({ book, review }) =>
                this.reviewService.create(book, review).pipe(
                    map((data: Review) => {
                        return ReviewActions.addReviewSuccess({
                            review: data
                        });
                    }),
                ),
            ),
        );
},
    );

    updateReview$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.updateReview),
            exhaustMap(({ id, review }) =>
                this.reviewService.updateOne(id, review).pipe(
                    map((data: Review) => {
                        return ReviewActions.updateReviewSuccess({
                            review: data
                        });
                    }),
                ),
            ),
        );
},
    );

    deleteReview$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(ReviewActions.deleteReview),
            mergeMap(({ id }) => {
                this.reviewService.delete(id);
                return of(ReviewActions.deleteReviewSuccess());
            }),

        );
},
    );

    constructor(
        private actions$: Actions,
        private reviewService: ReviewService,
    ){}
}
