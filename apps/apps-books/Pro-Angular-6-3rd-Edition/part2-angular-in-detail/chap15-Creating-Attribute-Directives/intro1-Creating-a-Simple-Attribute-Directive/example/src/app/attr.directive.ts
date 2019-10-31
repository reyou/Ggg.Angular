/* p-ref: app.module.ts */
/* c-ref: template.html */
import { Directive, ElementRef, Attribute, Input } from "@angular/core";
/* Decorator that marks a class as an Angular directive. 
You can define your own directives to attach custom behavior to elements in the DOM.
The options provide configuration metadata that determines how the directive should be processed, 
instantiated and used at runtime.
Directive classes, like component classes, can implement life-cycle hooks to 
influence their configuration and behavior. */
@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {
  constructor(element: ElementRef, @Attribute("pa-attr") bgClass: string) {
    /* To summarize, the PaAttrDirective class is a directive that is applied to elements that have a pa-attr
attribute and adds those elements to the bg-success and text-white classes, which the Bootstrap CSS
library uses to assign background and text colors to elements. */
    element.nativeElement.classList.add(bgClass || "bg-success", "text-white");
  }
}
