import { Injectable } from "@angular/core";
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from "rxjs/operators";
import { of, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RxJsService {
  constructor(private http: HttpClient) {}

  search(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term =>
        this.searchStarWarsNames(term).pipe(
          catchError(error => {
            console.log("Caught search error the right way!");
            return of({ results: null });
          })
        )
      )
    );
  }
  searchBadCatch(terms: Observable<string>) {
    return terms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchStarWarsNames(term)),
      catchError(error => {
        console.log("Caught search error the wrong way!");
        return of({ results: null });
      })
    );
  }

  private searchStarWarsNames(term) {
    let url = `https://swapi.co/api/people/?search=${term}`;
    if (term === "error") {
      url = `https://swapi.co/apix/people/?search=${term}`;
    }

    return this.http.get<any>(url);
  }
}
