import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Subscription, takeUntil } from "rxjs";
import { RxUnsubscribe } from "src/br-app/rx-unsubscribe";
import { getReview, updateReview } from "src/br-app/store/actions/review.action";
import { selectReview } from "src/br-app/store/selectors/review.selectors";
import { Review } from "src/models/review.model";

@Component({
  selector: "br-edit-review",
  templateUrl: "./edit-review.component.html",
  styleUrls: ["./edit-review.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditReviewComponent extends RxUnsubscribe implements OnInit {

  private subscrition: Subscription;
  private reveiwId: number;
  public review: Review = {
    title: "",
    body: "",
    created: new Date(),
    publishedDate: new Date()
  };

  constructor(private store: Store,
              private router: ActivatedRoute,
              private route: Router,
              private cf: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.subscrition = this.router.params
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (params) => {
        this.reveiwId = params["id"];
        this.getReviewInfo();
        this.cf.detectChanges();
      },
    );
  }

  getReviewInfo(): void {
    this.store.dispatch(getReview({ id: this.reveiwId }));
    this.store.select(selectReview)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      (data: Review) => {
        this.review = {
          title: data?.title,
          body: data?.body
        };
        this.cf.detectChanges();
      },
    );
  }

  onSubmit(): void {
    this.store.dispatch(updateReview({ id: this.reveiwId, review: this.review }));
    this.route.navigate(["/profile"]);
    this.cf.detectChanges();
  }

}
