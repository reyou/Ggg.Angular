/* p-ref: app.module.ts */
/* c-ref: template.html */
import {
  Directive,
  ElementRef,
  Input,
  SimpleChange,
  Output,
  EventEmitter,
  HostListener,
  HostBinding
} from '@angular/core';
import { Product } from '../models/product.model';

@Directive({
  selector: '[pa-attr]'
})
export class PaAttrDirective {
  @Input('pa-attr')
  bgClass: string;
  @Input('pa-product')
  /* Decorator that marks a DOM property as a host-binding property and supplies configuration metadata. Angular automatically checks host property bindings during change detection, and if a binding changes it updates the host element of the directive. */
  @HostBinding('class')
  product: Product;
  /* Creates an instance of this class that can deliver events synchronously or asynchronously. */
  @Output('pa-category')
  click = new EventEmitter<string>();
  /* Decorator that declares a DOM event to listen for, and provides a handler method to run when that event occurs. */
  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }
  @HostListener('mouseover')
  onMouseOver() {
    console.log('Mouse-over on this element.');
  }
  constructor(private element: ElementRef) {}

  /* Represents a basic change from a previous to a new value for a single property 
on a directive instance. Passed as a value in a {@link SimpleChanges} object to 
the ngOnChanges hook. */
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes['bgClass'];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
