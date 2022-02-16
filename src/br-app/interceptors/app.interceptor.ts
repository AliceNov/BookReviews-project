import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem("br-token");

    if (token) {
      const cloneReq = request.clone({
        headers: request.headers.set("Authorization",
        "Bearer " + token)
      });
      return next.handle(cloneReq);
    }
      return next.handle(request);

  }
}
