// https://www.codingame.com/playgrounds/8012/angular-form-validation-example-tutorial

import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Form Validation Tutorial";
  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      address: ["", Validators.required]
    });
  }
}
