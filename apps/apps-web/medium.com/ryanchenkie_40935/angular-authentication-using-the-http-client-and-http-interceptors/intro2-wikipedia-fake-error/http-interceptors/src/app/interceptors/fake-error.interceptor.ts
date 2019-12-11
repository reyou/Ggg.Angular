import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class FakeErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('FakeErrorInterceptor');
    return next.handle(request).pipe(
      filter((event: HttpResponse<any>) => {
        return event instanceof HttpResponse;
      }),
      tap(
        (event: HttpResponse<any>) => {
          console.log('tap1');
        },
        error => {
          console.log('taperror1');
        }
      ),
      tap(
        (event: HttpResponse<any>) => {
          console.log('tap2');
        },
        error => {
          console.log('taperror2');
        }
      ),
      map(
        (event: HttpResponse<any>) => {
          console.log('map1');
          const event2 = event.clone({
            status: 500
          });
          return event2;
        },
        error => {
          console.log('errormap1');
          return error;
        }
      ),
      map(
        (event: HttpResponse<any>) => {
          console.log('map2');
          console.log('event.status:', event.status);
          throw new HttpErrorResponse({
            error: 'This is a interceptor error set in fake-error.interceptor.ts'
          });
        },
        error => {
          console.log('errormap2');
          return error;
        }
      )
    );
  }
}
