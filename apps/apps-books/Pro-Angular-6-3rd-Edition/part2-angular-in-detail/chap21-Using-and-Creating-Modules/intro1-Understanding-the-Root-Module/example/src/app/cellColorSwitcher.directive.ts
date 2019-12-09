import {
  Directive,
  Input,
  Output,
  EventEmitter,
  SimpleChange,
  ContentChildren,
  QueryList
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
Use to get the QueryList of elements or directives from the content DOM. Any time a child element is added, removed, or moved, the query list will be updated, and the changes observable of the query list will emit a new value.
Content queries are set before the ngAfterContentInit callback is called. */
  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;
  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    this.updateContentChildren(changes["modelProperty"].currentValue);
  }
  ngAfterContentInit() {
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
    });
  }

  updateContentChildren(dark: any) {
    if (this.contentChildren != null && dark != undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }
}
