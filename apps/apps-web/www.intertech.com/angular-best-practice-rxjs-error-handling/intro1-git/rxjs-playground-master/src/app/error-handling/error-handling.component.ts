import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { RxJsService } from "./rx-js.service";
import { finalize } from "rxjs/operators";

@Component({
  selector: "app-error-handling",
  templateUrl: "./error-handling.component.html",
  styleUrls: ["./error-handling.component.css"]
})
export class ErrorHandlingComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  searchTermError$ = new Subject<string>();
  resultsError: any;
  results: any;

  constructor(private rxjsService: RxJsService) {}

  ngOnInit() {
    this.rxjsService
      .search(this.searchTerm$)
      .pipe(finalize(() => console.log("searchTerm$ finalize called!")))
      .subscribe(results => {
        console.log("Got results from search (good catch)");
        this.results = results.results;
      });

    this.rxjsService
      .searchBadCatch(this.searchTermError$)
      .pipe(
        finalize(() =>
          console.log("searchTermError$ (bad catch) finalize called!")
        )
      )
      .subscribe(results => {
        console.log("Got results from search (bad catch)");
        this.resultsError = results.results;
      });
  }
}
