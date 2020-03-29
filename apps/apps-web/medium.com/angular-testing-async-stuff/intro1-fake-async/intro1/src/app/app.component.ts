import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { GoogleBooksAPI } from "./google-books-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public get control() {
    return this.reactiveForm.get("input");
  }
  title = "intro1";
  options: string[];
  public reactiveForm = new FormGroup({
    input: new FormControl("", [Validators.required])
  });
  constructor(private googleBooksAPI: GoogleBooksAPI) {}
  ngOnInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value: string) => {
        this.options = [];
        this.suggest(value);
      });
  }
  suggest(q: string) {
    this.googleBooksAPI.query(q).subscribe(
      result => {
        console.log("suggest results:", result);
      },
      () => {
        // ...
      }
    );
  }
}
