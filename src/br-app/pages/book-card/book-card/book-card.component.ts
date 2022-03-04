import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {   Store } from "@ngrx/store";
import { ReplaySubject, Subscription, takeUntil } from "rxjs";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { getBook } from "src/br-app/store/actions/book.action";
import { getReviewsByBook } from "src/br-app/store/actions/review.action";
import { selectBook } from "src/br-app/store/selectors/book.selectors";
import { selectReviewByBook } from "src/br-app/store/selectors/review.selectors";
import { WINDOW } from "src/br-app/window-token";
import { Book } from "src/models/book.model";
import { Review, ReviewPageable } from "src/models/review.model";

@Component({
  selector: "br-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent implements OnInit, OnDestroy {
  public origin = this.window.location.origin;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  private subscrition: Subscription;
  private bookId: number;
  public book: Book = {
    author: "",
    cover: "",
    description: "",
    id: null,
    publishedDate: "",
    title: ""
  };
  public reviews: Review[];

  constructor(private store: Store,
    @Inject(WINDOW) private window: Window,
    private router: ActivatedRoute,
    private authService: AuthenticationService,
    private cf: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.subscrition = this.router.params
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (params) => {
        this.bookId = params["id"];
        this.cf.detectChanges();
      },
    );
    this.getBookInfo();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getBookInfo(): void {
    this.store.dispatch(getBook({ id: this.bookId }));
    this.store.select(((selectBook)))
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (data: Book) => {
        this.book = data;
        this.getReviewsList();
        this.cf.detectChanges();
      },
    );

  }

  getReviewsList(): void {
    this.store.dispatch(getReviewsByBook({ bookId: this.bookId, page: 1, limit: 10 }));
    this.store.select(((selectReviewByBook)))
    .pipe(takeUntil(this.destroyed$))
    .subscribe(
      (data: ReviewPageable) => {
        this.reviews = data?.items;
        this.cf.markForCheck();
      },
    );
  }

  isAuth():  boolean {
    if (!this.authService.isAuthenticated()) {
      return false;
    }
      return true;

  }
}
