import {
  Input,
  Output,
  EventEmitter,
  Directive,
  HostBinding,
  HostListener,
  SimpleChange
} from "@angular/core";
/* The exportAs property of the @Directive decorator specifies a name that will be used to refer to the directive in template variables. 
This example uses paModel as the value for the exportAs property, and you
should try to use names that make it clear which directive is providing the functionality. */
@Directive({
  selector: "input[paModel]",
  exportAs: "paModelDirective"
})
export class PaModel {
  direction: string = "None";
  /* Decorator that marks a class field as an input property and supplies configuration metadata. 
  The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value. */
  @Input("paModel")
  modelProperty: string;
  @HostBinding("value")
  fieldValue: string = "";
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["modelProperty"];
    if (change.currentValue != this.fieldValue) {
      this.fieldValue = changes["modelProperty"].currentValue || "";
      this.direction = "Model";
    }
  }
  /* Decorator that marks a class field as an output property and 
  supplies configuration metadata. 
  The DOM property bound to the output property is automatically 
  updated during change detection. */
  @Output("paModelChange")
  update = new EventEmitter<string>();
  /* The first argument to the @HostListener decorator specifies 
the name of the event that will be handled by the listener. 
The second argument is an array that will be used to provide the decorated 
methods with arguments. */
  @HostListener("input", ["$event.target.value"])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = "Element";
  }
}
