import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Book } from "src/models/book.model";
import { Review, ReviewPageable } from "src/models/review.model";

@Injectable({
  providedIn: "root"
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<Review> {
    return this.http.get<Review>("/api/reviews/" + id);
  }

  indexAll(page: number, limit: number): Observable<ReviewPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<ReviewPageable>("/api/reviews", { params });
  }

  indexByUser(userId: number, page: number, limit: number): Observable<ReviewPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<ReviewPageable>("/api/reviews/user/" + String(userId), { params });
  }

  indexByBook(bookId: number, page: number, limit: number): Observable<ReviewPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<ReviewPageable>("/api/reviews/book/" + String(bookId), { params });
  }

  create(book: Book, review: Review): Observable<Review> {
    const body = {
      review,
      book
    };
    return this.http.post<Review>("/api/reviews", body);
  }

  updateOne(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>("/api/reviews/" + id, review);
  }

  delete(id: number): Observable<boolean> {
    this.http.delete("/api/reviews/" + id);
    return of(true);
  }
}
