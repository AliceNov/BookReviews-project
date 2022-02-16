import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import {  Store } from "@ngrx/store";
import { getReviews } from "src/br-app/store/actions/review.action";
import { ReviewPageable } from "src/models/review.model";

@Component({
  selector: "br-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  reviews: ReviewPageable;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getReviews({ page: 1, limit: 10 }));

  }

}
