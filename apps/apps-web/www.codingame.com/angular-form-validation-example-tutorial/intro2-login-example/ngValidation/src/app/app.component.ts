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
import { HttpClientIntro1 } from "./http.service";
import { Observable } from "rxjs";
import { HttpResponseIntro1 } from "./http.response";
import { LoginResponse } from "./login.response";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Angular Form Validation Tutorial";
  formGroup: FormGroup;
  errorMessage: string = "";
  successMessage: string = "";
  loginResponse: HttpResponseIntro1<LoginResponse>;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClientIntro1
  ) {
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
  isErrorMessage() {
    if (this.errorMessage !== "") {
      return true;
    }
    return false;
  }

  isSuccessMessage() {
    if (this.successMessage !== "") {
      return true;
    }
    return false;
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
    let userName = this.formGroup.controls["name"].value;
    let password = this.formGroup.controls["password"].value;
    let loginProducer: Observable<HttpResponseIntro1<
      LoginResponse
    >> = this.httpClient.login(userName, password);
    loginProducer.subscribe(
      (loginResponse: HttpResponseIntro1<LoginResponse>) => {
        this.loginResponse = loginResponse;
        if (loginResponse.isSuccess === false) {
          this.successMessage = "";
          this.errorMessage = loginResponse.message;
        } else {
          this.successMessage = "Login Successful!";
          this.errorMessage = "";
        }
      }
    );
  }
}
