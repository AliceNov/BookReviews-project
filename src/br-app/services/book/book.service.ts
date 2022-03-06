import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  Observable,  Subscription,  tap  } from "rxjs";
import { Book, BookPageable } from "src/models/book.model";

@Injectable({
  providedIn: "root"
})
export class BookService {

  constructor(private http: HttpClient) { }

  create(book: Book, form: FormData): Observable<Book> {
    return this.http.post<Book>("/api/books", book).pipe(
        tap((data) => {
          console.log(data.id);
          if (form !== null) {
            this.uploadBookCover(form, data.id);
          }

        }),
    );
  }

  indexAll(page: number, limit: number): Observable<BookPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<BookPageable>("/api/books", { params });
  }

  indexByReview(reviewId: number, page: number, limit: number): Observable<BookPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<BookPageable>("/api/books/" + String(reviewId), { params });
  }

  findOne(id: number): Observable<Book> {
    return this.http.get<Book>("/api/books/" + id);
  }

  updateOne(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>("/api/books/" + id, book);
  }

  delete(id: number): void {
    this.http.delete("/api/books/" + id).subscribe();
  }

  uploadBookCover(form: FormData, id: number): Subscription{
    return this.http.post<FormData>("/api/books/upload/" + id, form).subscribe();
  }

  change: boolean = false;

  setStatus(flag: boolean): void{
    this.change = flag;
  }

  getStatus(): boolean {
    return this.change;
  }
}
