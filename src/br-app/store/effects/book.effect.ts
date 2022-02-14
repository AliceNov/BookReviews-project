import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap } from "rxjs";
import { BookService } from "src/br-app/services/book/book.service";
import { Book, BookPageable } from "src/models/book.model";
import * as BookActions from "../actions/book.action";

@Injectable({
    providedIn: "root"
})
export class ReviewEffects {

    getBook$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.getBook),
            exhaustMap(({ id }) =>
                this.bookService.findOne(id).pipe(
                    map((data: Book) => {
                        return BookActions.getBookSuccess({
                            book: data
                        });
                    }),
                ),
            ),
        );
},
    );

    getBookByReview$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.getBooksByReview),
            mergeMap(({ reviewId, page, limit }) =>
                this.bookService.indexByReview(reviewId, page, limit).pipe(
                    map((data: BookPageable) => {
                        return BookActions.getBooksByReviewSuccess({
                            books: data
                        });
                    }),
                ),
            ),
        );
},
    );


    getBookss$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.getBooks),
            mergeMap(({ page, limit }) =>
                this.bookService.indexAll(page, limit).pipe(
                    map((data: BookPageable) => {
                        return BookActions.getBooksSuccess({
                            books: data
                        });
                    }),
                ),
            ),
        );
},
    );

    addBook$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.addBook),
            exhaustMap(({ book }) =>
                this.bookService.create(book).pipe(
                    map((data: Book) => {
                        return BookActions.addBookSuccess({
                            book: data
                        });
                    }),
                ),
            ),
        );
},
    );

    updateBook$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.updateBook),
            exhaustMap(({ id, book }) =>
                this.bookService.updateOne(id, book).pipe(
                    map((data: Book) => {
                        return BookActions.updateBookSuccess({
                            book: data
                        });
                    }),
                ),
            ),
        );
},
    );

    deleteBook$ = createEffect(() => {
 return this.actions$.pipe(
            ofType(BookActions.deleteBook),
            exhaustMap(({ id }) =>
                this.bookService.delete(id).pipe(
                    map(() => {
                        return BookActions.deleteBookSuccess();
                    }),
                ),
            ),
        );
},
    );

    constructor(
        private actions$: Actions,
        private bookService: BookService,
    ){}
}
