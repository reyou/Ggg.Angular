/* p-ref: app.module.ts */
/* c-ref: template.html */
import {
  Directive,
  ElementRef,
  Attribute,
  Input,
  SimpleChange,
  Output,
  EventEmitter
} from "@angular/core";
import { Product } from "./product.model";

@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {
  @Input("pa-attr")
  bgClass: string;
  @Input("pa-product")
  product: Product;
  /* Creates an instance of this class that can deliver events synchronously or asynchronously. */
  @Output("pa-category")
  click = new EventEmitter<string>();
  constructor(private element: ElementRef) {
    this.element.nativeElement.addEventListener("click", e => {
      if (this.product != null) {
        this.click.emit(this.product.category);
      }
    });
  }

  /* Represents a basic change from a previous to a new value for a single property 
on a directive instance. Passed as a value in a {@link SimpleChanges} object to 
the ngOnChanges hook. */
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["bgClass"];
    let classList = this.element.nativeElement.classList;
    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
