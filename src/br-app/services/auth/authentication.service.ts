import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AuthLoginModel } from "src/models/auth.login.model";
import { TokenModel } from "src/models/token.model";
import { User } from "src/models/user.model";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {

  private JWT_TOKEN: string = "br-token";

  constructor(private http: HttpClient) { }

  login(loginModel: AuthLoginModel): Observable<TokenModel> {
    return this.http.post<TokenModel>("/api/users/login", loginModel).pipe(
      map((token) => {
        localStorage.setItem(this.JWT_TOKEN, token.ACCESS_TOKEN);
        return token;
      }),
    );
  }

  getAuthUser(): Observable<User> {
    return this.http.get<User>("/api/users/current-login");
  }

  logout(): void {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>("/api/users", user);
  }
}
