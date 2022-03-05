import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { ReplaySubject, takeUntil } from "rxjs";
import { getBooks } from "src/br-app/store/actions/book.action";
import { selectBooks } from "src/br-app/store/selectors/book.selectors";
import { WINDOW } from "src/br-app/window-token";
import { Book } from "src/models/book.model";

@Component({
  selector: "br-home-book",
  templateUrl: "./home-book.component.html",
  styleUrls: ["./home-book.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeBookComponent implements OnInit, OnDestroy {

  public listOfBooks: Book[];
  public origin = this.window.location.origin;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store,
    private cf: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window) { }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.getBookList();
  }

  getBookList(): void {
    this.store.dispatch(getBooks({ page: 1, limit: 6 }));
    this.store.select((selectBooks))
          .pipe(takeUntil(this.destroyed$))
          .subscribe((data) => {
            this.listOfBooks = data?.items;
            this.cf.markForCheck();
          });
  }

}
