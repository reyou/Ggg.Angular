import { ComponentFixture } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { AbstractControl } from "@angular/forms";

export default class SpecUtils {
  static focusAndInput(
    value: string,
    fixture: ComponentFixture<AppComponent>,
    input: string
  ) {
    let control: AbstractControl = fixture.componentInstance.control;
    control.setValue(value);
  }
}
