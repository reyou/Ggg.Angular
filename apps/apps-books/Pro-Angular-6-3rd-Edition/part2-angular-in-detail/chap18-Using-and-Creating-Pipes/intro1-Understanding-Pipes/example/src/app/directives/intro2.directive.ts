// https://angular.io/api/core/ElementRef
import { Directive, ElementRef, Input } from "@angular/core";
/* Decorator that marks a class as an Angular directive. 
You can define your own directives to attach custom behavior to elements in the DOM.
The options provide configuration metadata that determines how the directive should be processed, 
instantiated and used at runtime.
Directive classes, like component classes, can implement life-cycle hooks to 
influence their configuration and behavior. */
@Directive({
  selector: "[intro2-attr]"
})
export class Intro2Directive {
  /* Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value.

@usageNotes — You can supply an optional name to use in templates when the component is instantiated, that maps to the name of the bound property. By default, the original name of the bound property is used for input binding. */
  @Input("intro2-attr")
  option: string;
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    let styleText = "";
    switch (this.option) {
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
    this.element.nativeElement.style = styleText;
  }
}
