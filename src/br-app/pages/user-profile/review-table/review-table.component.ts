import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import {  Store } from "@ngrx/store";
import { takeUntil } from "rxjs";
import { RxUnsubscribe } from "src/br-app/rx-unsubscribe";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { deleteReview, getReviewsByUser } from "src/br-app/store/actions/review.action";
import { selectReviewByUser } from "src/br-app/store/selectors/review.selectors";
import { Review } from "src/models/review.model";

@Component({
  selector: "br-review-table",
  templateUrl: "./review-table.component.html",
  styleUrls: ["./review-table.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewTableComponent extends RxUnsubscribe implements OnInit {

  public reviewList: Review[];
  private id: number;

  constructor(private store: Store,
              private cf: ChangeDetectorRef,
              private authService: AuthenticationService) {
    super();
  }
  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.getReviewList(this.id);
  }

   getReviewList(id: number): void {
    this.store.dispatch(getReviewsByUser({ userId: id, page: 1, limit: 10 }));
    this.store.select(selectReviewByUser)
    .pipe( takeUntil(this.destroy$))
    .subscribe(
      (data) => {
        this.reviewList = data?.items;
        this.cf.detectChanges();
      },
    );
  }

  deleteReview(review: Review): void {
    this.store.dispatch(deleteReview({ id: review.id }));
    this.getReviewList(this.id);
    this.cf.detectChanges();
  }

}
