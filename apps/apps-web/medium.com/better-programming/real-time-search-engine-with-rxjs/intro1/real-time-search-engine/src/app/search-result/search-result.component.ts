import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"]
})
export class SearchResultComponent implements OnInit {
  /*Decorator that marks a class field as an input property and supplies configuration metadata. 
  The input property is bound to a DOM property in the template. 
  During change detection, Angular automatically updates the data property 
  with the DOM property's value.
@usageNotes — You can supply an optional name to use in templates when the 
component is instantiated, that maps to the name of the bound property. By default, 
the original name of the bound property is used for input binding. */
  /*Notice how I used an input binding to send the 
  searchresult to the search-result component.*/
  @Input() searchResult: any;
  constructor() {}

  ngOnInit() {}
}
