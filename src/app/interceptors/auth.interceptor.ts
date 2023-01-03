import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${this.authService.token}`
      ),
    });
    return next.handle(request).pipe(
      catchError((error) => {
        if ([401, 403].includes(error.status)) {
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
