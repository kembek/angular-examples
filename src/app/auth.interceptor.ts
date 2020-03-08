import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpEventType
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("Interceptor request", req);

    const reqCloned = req.clone({
      headers: req.headers.append("Auth", "SOME Random Token")
    });

    return next.handle(reqCloned).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log("Interceptor response", event);
        }
      })
    );
  }
}
