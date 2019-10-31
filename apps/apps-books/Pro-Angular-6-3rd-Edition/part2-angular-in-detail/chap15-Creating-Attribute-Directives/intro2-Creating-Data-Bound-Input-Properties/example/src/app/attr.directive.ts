/* p-ref: app.module.ts */
/* c-ref: template.html */
import {
  Directive,
  ElementRef,
  Attribute,
  Input,
  SimpleChange
} from "@angular/core";
@Directive({
  selector: "[pa-attr]"
})
export class PaAttrDirective {
  constructor(private element: ElementRef) {}
  @Input("pa-attr")
  bgClass: string;
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
