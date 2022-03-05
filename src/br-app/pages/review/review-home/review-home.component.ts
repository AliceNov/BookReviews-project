import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import {  Store } from "@ngrx/store";
import { takeUntil } from "rxjs";
import { RxUnsubscribe } from "src/br-app/rx-unsubscribe";
import { getReviews } from "src/br-app/store/actions/review.action";
import { selectReviews } from "src/br-app/store/selectors/review.selectors";
import { WINDOW } from "src/br-app/window-token";
import { ReviewPageable } from "src/models/review.model";

@Component({
  selector: "br-review-home",
  templateUrl: "./review-home.component.html",
  styleUrls: ["./review-home.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewHomeComponent extends RxUnsubscribe implements OnInit {

  public reviews: ReviewPageable;
  public origin = this.window.location.origin;
  public pageEvent: PageEvent;

  constructor(private store: Store,
    private cf: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window) {
    super();
  }

  ngOnInit(): void {
    this.getReviewList();
  }

  getReviewList(): void {
    this.store.dispatch(getReviews({ page: 1, limit: 10 }));
    this.store.select((selectReviews))
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (data: ReviewPageable) => {
        this.reviews = data;
        this.cf.detectChanges();
      },
    );
  }

  onPaginaChange(event: PageEvent): void {
    let page = event.pageIndex;
    const size = event.pageSize;

    page = page + 1;
    this.store.dispatch(getReviews({ page, limit: size }));
    this.store.select((selectReviews))
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (data: ReviewPageable) => {
        this.reviews = data;
        this.cf.detectChanges();
      },
    );

  }
}
