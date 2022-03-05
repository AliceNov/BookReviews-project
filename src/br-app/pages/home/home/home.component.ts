import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "br-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    return;
  }

}
