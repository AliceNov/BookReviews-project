import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, OnDestroy, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import {  Store } from "@ngrx/store";
import { ReplaySubject, Subscription, takeUntil } from "rxjs";
import { AuthenticationService } from "src/br-app/services/auth/authentication.service";
import { BookService } from "src/br-app/services/book/book.service";
import { deleteBook, getBooks } from "src/br-app/store/actions/book.action";
import { selectBooks } from "src/br-app/store/selectors/book.selectors";
import { WINDOW } from "src/br-app/window-token";
import { Book, BookPageable } from "src/models/book.model";
import { UserRole } from "src/models/user.model";

@Component({
  selector: "br-book-home",
  templateUrl: "./book-home.component.html",
  styleUrls: ["./book-home.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookHomeComponent implements OnInit, DoCheck, OnDestroy {

  public changes: boolean = false;
  public books: BookPageable;
  public listOfBooks: Book[];
  public origin = this.window.location.origin;
  public isAdmin: boolean = false;
  public pageEvent: PageEvent;
  private sub: Subscription;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);


  constructor(private store: Store,
    private cf: ChangeDetectorRef,
    @Inject(WINDOW) private window: Window,
    private authService: AuthenticationService,
    private bookService: BookService) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  ngOnInit(): void {
    this.getBookList();
  }

  ngDoCheck(): void {
      if (this.bookService.getStatus()){
        this.getBookList();
        this.bookService.setStatus(false);
        this.cf.markForCheck();
      }
  }

  getBookList(): void {
    this.store.dispatch(getBooks({ page: 1, limit: 10 }));
    this.sub = this.store.select((selectBooks))
          .pipe(takeUntil(this.destroyed$))
          .subscribe((data) => {
            this.listOfBooks = data?.items;
            this.books  = data;
            this.cf.markForCheck();
          });
  }

  onPaginaChange(event: PageEvent): void {
    let page = event.pageIndex;
    const size = event.pageSize;

    page = page + 1;
    this.store.dispatch(getBooks({ page, limit: size }));
    this.sub = this.store.select((selectBooks))
          .pipe(takeUntil(this.destroyed$))
          .subscribe((data) => {
            this.listOfBooks = data?.items;
            this.books  = data;
            this.cf.markForCheck();
          });

  }

  get runChangeDetection(): void {
    return;
  }

  delete(book: Book): void{
    this.store.dispatch(deleteBook({ id: book.id }));
    this.getBookList();
    this.cf.markForCheck();
  }

  isAuth(): boolean {
    if (this.authService.isAuthenticated()) {
      if (this.authService.getUserRole() === UserRole.ADMIN){
        return true;
      }
        return false;

    }
      return false;

  }

}
