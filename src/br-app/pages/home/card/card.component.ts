import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Store } from "@ngrx/store";
import { ReplaySubject, takeUntil } from "rxjs";
import { getReviews } from "src/br-app/store/actions/review.action";
import { selectReviews } from "src/br-app/store/selectors/review.selectors";
import { WINDOW } from "src/br-app/window-token";
import { ReviewPageable } from "src/models/review.model";

@Component({
  selector: "br-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit, OnDestroy {

  public reviews: ReviewPageable;
  public origin = this.window.location.origin;
  public pageEvent: PageEvent;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store,
    private cf: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.getReviewList();
  }

  getReviewList(): void {
    this.store.dispatch(getReviews({ page: 1, limit: 10 }));
    this.store.select((selectReviews))
    .pipe(takeUntil(this.destroyed$))
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
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (data: ReviewPageable) => {
        this.reviews = data;
        this.cf.detectChanges();
      },
    );

  }

}
