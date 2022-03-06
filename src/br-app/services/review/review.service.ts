import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Book } from "src/models/book.model";
import { Review, ReviewPageable } from "src/models/review.model";
import { User } from "src/models/user.model";

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

  create(book: Book, review: Review, user: User): Observable<Review> {
    const body = {
      review,
      book,
      user
    };
    return this.http.post<Review>("/api/reviews", body);
  }

  updateOne(id: number, review: Review): Subscription {
    return this.http.put<Review>("/api/reviews/" + id, review).subscribe();
  }

  delete(id: number): void {
    this.http.delete("/api/reviews/" + id).subscribe();
  }
}
