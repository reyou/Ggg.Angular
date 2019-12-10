import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(public auth: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('JwtInterceptor');
    return next.handle(request).pipe(
      tap(
        event => {
          if (event instanceof HttpResponse) {
            console.log('do stuff with response if you want');
          }
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              this.auth.collectFailedRequest(request);
            }
          }
        }
      )
    );
  }
}
