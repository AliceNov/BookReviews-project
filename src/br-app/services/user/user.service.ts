import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User, UserPageable } from "src/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<User> {
    return this.http.get<User>("/api/users/" + id);
  }

  indexAll(page: number, limit: number): Observable<UserPageable> {
    let params = new HttpParams();

    params = params.append("page", String(page));
    params = params.append("limit", String(limit));

    return this.http.get<UserPageable>("/api/users", { params });
  }

  updateOne(id: number, user: User): Observable<User> {
    return this.http.put<User>("/api/users/" + id, user);
  }

  delete(id: number): void {
    this.http.delete("/api/users/" + id);
  }
}
