import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Review, ReviewPageable } from "src/models/review.model";

export interface ReviewState extends EntityState<Review | ReviewPageable> {
    selectedReviewId: number | null;
}

export const adapter: EntityAdapter<Review | ReviewPageable> = createEntityAdapter<Review | ReviewPageable>();
