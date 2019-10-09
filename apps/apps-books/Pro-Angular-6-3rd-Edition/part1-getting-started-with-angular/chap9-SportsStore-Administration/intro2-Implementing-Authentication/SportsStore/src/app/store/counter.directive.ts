import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  Attribute,
  SimpleChanges
} from "@angular/core";
/*This is an example of a structural directive, which is 
described in detail in Chapter 16. This directive is applied to 
elements through a counter property and relies on special features 
that Angular provides for creating content repeatedly, just like 
the built-in ngFor directive. In this case, rather than yield each object
in a collection, the custom directive yields a series of numbers 
that can be used to create the page navigation buttons. */
@Directive({
  selector: "[counterOf]"
})
export class CounterDirective {
  @Input("counterOf")
  counter: number;
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<Object>
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(
        this.template,
        new CounterDirectiveContext(i + 1)
      );
    }
  }
}
class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}
