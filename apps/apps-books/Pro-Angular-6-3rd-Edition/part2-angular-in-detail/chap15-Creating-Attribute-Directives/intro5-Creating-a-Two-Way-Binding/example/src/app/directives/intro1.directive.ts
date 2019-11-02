// https://angular.io/api/core/ElementRef
import { Directive, ElementRef, Attribute } from "@angular/core";
/* Decorator that marks a class as an Angular directive. 
You can define your own directives to attach custom behavior to elements in the DOM.
The options provide configuration metadata that determines how the directive should be processed, 
instantiated and used at runtime.
Directive classes, like component classes, can implement life-cycle hooks to 
influence their configuration and behavior. */
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
