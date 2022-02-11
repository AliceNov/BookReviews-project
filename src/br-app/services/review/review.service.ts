import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
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

  create(review: Review): Observable<Review> {
    return this.http.post<Review>("/api/reviews", review);
  }

  updateOne(id: number, review: Review): Observable<Review> {
    return this.http.post<Review>("/api/reviews/" + id, review);
  }

  delete(id: number): void {
    this.http.delete("/api/reviews/" + id);
  }
}
