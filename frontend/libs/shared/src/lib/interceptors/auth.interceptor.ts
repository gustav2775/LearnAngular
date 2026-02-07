import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // const idToken = localStorage.getItem("id_token");

    // if (idToken) {
      return next.handle(
        req.clone({
          setHeaders: { "Authorization": `Bearer tokenId` }
        })
      );
    // }

    // return next.handle(req);
  }
}
