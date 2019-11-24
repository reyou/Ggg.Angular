// https://www.codingame.com/playgrounds/8012/angular-form-validation-example-tutorial
// https://angular.io/api/forms/FormControl
import { Component } from "@angular/core";
import { ValidationService } from "./validation.service";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Form Validation Tutorial";
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    let controlsConfig = this.getControlsConfig();
    this.formGroup = this.formBuilder.group(controlsConfig);
  }
  getControlsConfig() {
    return {
      name: this.getControl("name"),
      email: this.getControl("email"),
      password: this.getControl("password")
    };
  }
  getControl(controlName: string, defaultValue: string = null) {
    if (controlName === "email") {
      return new FormControl(defaultValue || "", {
        validators: [Validators.required, ValidationService.emailValidator]
      });
    }
    return new FormControl(defaultValue || "", {
      validators: Validators.required
    });
  }

  isInputValid(inputName: string) {
    switch (inputName) {
      case "name":
        return (
          this.formGroup.controls[inputName].invalid &&
          (this.formGroup.controls[inputName].dirty ||
            this.formGroup.controls[inputName].touched)
        );
      case "email":
        return (
          this.formGroup.controls[inputName].invalid &&
          (this.formGroup.controls[inputName].dirty ||
            this.formGroup.controls[inputName].touched)
        );
      case "password":
        return (
          this.formGroup.controls[inputName].invalid &&
          (this.formGroup.controls[inputName].dirty ||
            this.formGroup.controls[inputName].touched)
        );
    }
  }
  isInputRequired(inputName: string) {
    return this.formGroup.controls[inputName].errors.required;
  }
  isInputInvalid(inputName: string) {
    return this.formGroup.controls[inputName].errors.invalidStatus;
  }

  login() {
    if (!this.formGroup.valid) {
      return false;
    }
    alert("Login Triggered.");
  }
}
