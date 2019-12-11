import { Component, OnInit } from '@angular/core';

import { HttpRequest, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.css']
})
export class PingComponent implements OnInit {
  searchResults: any;
  keyword: string;
  error: any;
  constructor(public http: HttpClient) {}
  public ping() {
    this.http
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=&list=search&srsearch=${this.keyword}`
      )
      .subscribe({
        next: (data: any) => {
          this.searchResults = data.query.search;
        },
        error: error => {
          console.log(error);
          this.error = error;
        },
        complete: () => {
          console.log('complete');
        }
      });
  }
  public isDisabled() {
    if (this.keyword && this.keyword.length > 0) {
      return false;
    }
    return true;
  }
  ngOnInit() {}
}
