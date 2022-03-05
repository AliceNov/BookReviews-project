import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import {  Store } from "@ngrx/store";
import { ReplaySubject, takeUntil } from "rxjs";
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
export class ReviewTableComponent implements OnInit, OnDestroy {

  public reviewList: Review[];
  private id: number;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store,
              private cf: ChangeDetectorRef,
              private authService: AuthenticationService) { }
  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.getReviewList(this.id);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

   getReviewList(id: number): void {
    this.store.dispatch(getReviewsByUser({ userId: id, page: 1, limit: 10 }));
    this.store.select(selectReviewByUser)
    .pipe( takeUntil(this.destroyed$))
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
