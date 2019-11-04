import {
  Directive,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  ContentChild
} from "@angular/core";
import { PaCellColor } from "./cellColor.directive";
@Directive({
  selector: "table"
})
export class PaCellColorSwitcher {
  /* Decorator that marks a class field as an input property and supplies configuration metadata. The input property is bound to a DOM property in the template. During change detection, Angular automatically updates the data property with the DOM property's value. */
  @Input("paCellDarkColor")
  modelProperty: Boolean;
  /* Parameter decorator that configures a content query.
Use to get the first element or the directive matching the selector from the content DOM. If the content DOM changes, and a new child matches the selector, the property will be updated. */
  @ContentChild(PaCellColor)
  contentChild: PaCellColor;
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    if (this.contentChild != null) {
      this.contentChild.setColor(changes["modelProperty"].currentValue);
    }
  }
}
