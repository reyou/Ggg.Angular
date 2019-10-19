import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Subject, Observable } from "rxjs";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-searchbox",
  templateUrl: "./searchbox.component.html",
  styleUrls: ["./searchbox.component.css"]
})
export class SearchboxComponent implements OnInit {
  // create instance of Formgroup
  contactForm: FormGroup;
  /*I made the searchTerm variable a subject 
  which allows us to both publish and subscribe.   */
  searchTerm = new Subject<string>();
  /*Decorator that marks a class field as an output property and supplies 
  configuration metadata. The DOM property bound to the output property is 
  automatically updated during change detection. */
  /*I made the loading and searchResults variables of the type EventEmitter 
  with an @Output directive. This is so their values can be emitted as events.*/
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  baseUrl = "https://api.cdnjs.com/libraries";
  queryUrl = "?search=";
  @Output() searchResult: EventEmitter<any> = new EventEmitter<any>();
  constructor(private fb: FormBuilder, private http: HttpClient) {
    /*This line of code map( (e: any) => e.target.value ) 
    simply extracts the value of the user’s input.*/
    /*debounceTime(400) throttles the request after 400ms, i.e. we make the 
    request only after the user has paused for 400ms. You can read more about debounceTime. */
    /*distinctUntilChanged() will ensure that only distinct data passes through. 
    If the user types something, erases a character quickly, and then types back the same 
    character, distinctUntilChanged will only send the data once. */
    /*filter( (term: string) => term.length > 0) will ensure that the stream emits only 
    search terms with lengths greater than 0. You can actually use a higher value 
    here if you want to eliminate short searches.  */
    /*The following lines make a subscription to the observable, assign true to 
    loading and call the _searchEntries method. We will talk about this method soon. */
    this.searchTerm
      .pipe(
        map((e: any) => e.target.value),
        debounceTime(400),
        distinctUntilChanged(),
        filter(term => term.length > 0)
      )
      .subscribe(searchterm => {
        console.log(
          "searchbox.component",
          "searchTerm",
          "subscribe",
          searchterm
        );
        this.loading.emit(true);
        this._searchEntries(searchterm);
      });
  }

  /*In the searchEntries() function, when we get a response from our HTTP request, 
  the searchResult event is emitted with the response. 
  The loading event is emitted with “false.”   */
  /*The first method (searchEntries) makes the HTTP request to get our resource 
  and returns the response as observable. Notice how the response was mapped 
  and the searchResult was set to the response.   */
  searchEntries(term: any): Observable<any> {
    return this.http.get(this.baseUrl + this.queryUrl + term).pipe(
      map(response => {
        console.log("searchbox.component", "searchEntries", "map", response);
        this.searchResult.emit(response);
      })
    );
  }

  // Observable == Producer
  // Observer == Consumer
  /*The second method exists to subscribe to the observable returned 
  from the first method. Here, if the request is successful, loading is 
  set to false, likewise, if there is an error in the request.   */
  _searchEntries(term: any) {
    this.searchEntries(term).subscribe(
      () => {
        console.log("searchbox.component", "_searchEntries", "subscribe", term);
        this.loading.emit(false);
      },
      () => {
        this.loading.emit(false);
      }
    );
  }

  ngOnInit() {}
}
