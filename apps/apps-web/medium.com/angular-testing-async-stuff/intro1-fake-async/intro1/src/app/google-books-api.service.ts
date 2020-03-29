import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GoogleBooksAPI {
  query(q: string): any {
    return of({
      query: q,
      results: this.getResults(q)
    });
  }
  getResults(q: string): any {
    let results = [];
    for (let i = 0; i < 10; i++) {
      results.push(`Result for ${q} - ${i}`);
    }
    return results;
  }
  constructor() {}
}
