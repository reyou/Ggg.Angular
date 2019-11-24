import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { catchError, map, tap } from "rxjs/operators";
import { HttpResponseIntro1 } from "./http.response";
import { LoginResponse } from "./login.response";

@Injectable()
export class HttpClientIntro1 {
  constructor(private http: HttpClient) {}
  login(
    userName: string,
    password: string
  ): Observable<HttpResponseIntro1<LoginResponse>> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    let body = {
      UserName: userName,
      Password: password
    };
    return this.http
      .post<any>(`${environment.apiUrl}/api/auth/login`, body, httpOptions)
      .pipe(
        map(response => {
          return this.handleResponse<LoginResponse>(response);
        }),
        catchError(this.handleError())
      );
  }
  handleResponse<T>(response: Response): HttpResponseIntro1<T> {
    let responseAs = (response as unknown) as T;
    let httpResponse: HttpResponseIntro1<T> = new HttpResponseIntro1<T>(
      true,
      "",
      responseAs
    );
    return httpResponse;
  }
  private handleError() {
    return (
      httpErrorResponse: HttpErrorResponse
    ): Observable<HttpResponseIntro1<null>> => {
      let errorMessage =
        "An unknown error has been occured. We'll take a look.";
      if (httpErrorResponse.error.message) {
        errorMessage = httpErrorResponse.error.message;
      } else if (httpErrorResponse.error) {
        errorMessage = `${httpErrorResponse.statusText} - ${httpErrorResponse.message}`;
      }
      let httpResponse: HttpResponseIntro1<null> = new HttpResponseIntro1<null>(
        false,
        errorMessage
      );
      return of(httpResponse);
    };
  }
}
