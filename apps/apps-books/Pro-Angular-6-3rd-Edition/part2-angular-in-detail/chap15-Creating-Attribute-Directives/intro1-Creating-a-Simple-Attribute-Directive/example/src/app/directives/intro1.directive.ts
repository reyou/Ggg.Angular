// https://angular.io/api/core/ElementRef
import { Directive, ElementRef, Attribute } from "@angular/core";

@Directive({
  selector: "[intro1-attr]"
})
export class Intro1Directive {
  constructor(element: ElementRef, @Attribute("intro1-attr") option: string) {
    let styleText = "";
    switch (option) {
      case "intro1":
        styleText = "border: 1px solid red";
        break;
      case "intro2":
        styleText = "border: 2px solid blue";
        break;
      case "intro3":
        styleText = "border: 3px solid green";
        break;
    }
    element.nativeElement.style = styleText;
  }
}
