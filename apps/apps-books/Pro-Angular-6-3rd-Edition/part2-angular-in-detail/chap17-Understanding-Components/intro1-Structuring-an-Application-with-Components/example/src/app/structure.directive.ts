import {
  Directive,
  SimpleChange,
  ViewContainerRef,
  TemplateRef,
  Input
} from "@angular/core";
@Directive({
  selector: "[paIf]"
})
export class PaStructureDirective {
  constructor(
    /* Represents a container where one or more views can be attached to a component.
Can contain host views (created by instantiating a component with the createComponent() method), 
and embedded views (created by instantiating a TemplateRef with the createEmbeddedView() method). */
    private container: ViewContainerRef,
    /* Represents an embedded template that can be used to instantiate embedded views. 
    To instantiate embedded views based on a template, use the ViewContainerRef 
    method createEmbeddedView().

Access a TemplateRef instance by placing a directive on an <ng-template> element 
(or directive prefixed with *). 
The TemplateRef for the embedded view is injected into the constructor of the directive, 
using the TemplateRef token.
You can also use a Query to find a TemplateRef associated with a component or a directive. */
    private template: TemplateRef<Object>
  ) {}
  @Input("paIf")
  expressionResult: boolean;
  /* Represents a basic change from a previous to a new value for a single property on a directive instance. 
  Passed as a value in a {@link SimpleChanges} object to the ngOnChanges hook. */
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["expressionResult"];
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      // Instantiates an embedded view and inserts it into this container.
      this.container.createEmbeddedView(this.template);
    }
  }
}
