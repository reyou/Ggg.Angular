import { Directive, HostBinding } from "@angular/core";
@Directive({
  selector: "td[paApplyColor]"
})
export class PaCellColor {
  /* Decorator that marks a DOM property as a host-binding property and supplies configuration metadata. 
  Angular automatically checks host property bindings during change detection, 
  and if a binding changes it updates the host element of the directive. */
  @HostBinding("class")
  bgClass: string = "";
  setColor(dark: Boolean) {
    this.bgClass = dark ? "bg-dark" : "";
  }
}
