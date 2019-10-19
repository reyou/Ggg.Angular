import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  loading: boolean;

  searchResult: any;
  constructor() {}

  updateResult(e) {
    this.searchResult = e;
  }

  ngOnInit() {}
}
