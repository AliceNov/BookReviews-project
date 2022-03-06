import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {  Store } from "@ngrx/store";
import { Subscription, takeUntil } from "rxjs";
import { RxUnsubscribe } from "src/br-app/rx-unsubscribe";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { getBook } from "src/br-app/store/actions/book.action";
import { addReview } from "src/br-app/store/actions/review.action";
import { getUser } from "src/br-app/store/actions/user.action";
import { selectBook } from "src/br-app/store/selectors/book.selectors";
import { selectLoginUser } from "src/br-app/store/selectors/user.selectors";
import { WINDOW } from "src/br-app/window-token";
import { Book } from "src/models/book.model";
import { Review } from "src/models/review.model";
import { User } from "src/models/user.model";

@Component({
  selector: "br-create-review",
  templateUrl: "./create-review.component.html",
  styleUrls: ["./create-review.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateReviewComponent extends RxUnsubscribe implements OnInit {

  public review: Review = {
    title: "",
    body: "",
    created: new Date(),
    publishedDate: new Date()
  };


  private subscrition: Subscription;
  public bookId: number;
  public book: Book;
  public origin = this.window.location.origin;
  private id: number;
  public user: User;

  constructor(private store: Store,
    @Inject(WINDOW) private window: Window,
    private router: ActivatedRoute,
    private route: Router,
    private authService: AuthenticationService,
    private cf: ChangeDetectorRef) {
    super();
      this.id = this.authService.getUserId();
    }

  ngOnInit(): void {
    this.getBookInfo();
    this.getUserInfo(this.id);
  }

  getUserInfo(userId: number): void{
    this.store.dispatch(getUser({ id: userId }));
    this.store.select((selectLoginUser))
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (data) => {
        this.user = data;
        this.cf.detectChanges();
      },
    );
  }

  getBookInfo(): void {
    this.subscrition = this.router.params
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (params) => {
        this.bookId = params["id"];
        this.cf.markForCheck();
      },
    );

    this.store.dispatch(getBook({ id: this.bookId }));
    this.store.select((selectBook))
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (data) => {
        this.book = data;
        this.cf.markForCheck();
      },
    );
  }

  createReview(): void {
    this.store.dispatch(addReview({ book: this.book, review: this.review, user: this.user }));
    this.route.navigate([`/book-card/${this.bookId}`]);
  }

}
