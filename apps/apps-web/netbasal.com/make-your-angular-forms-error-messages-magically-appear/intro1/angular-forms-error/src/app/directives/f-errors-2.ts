/* Next, we must obtain a reference to the current control instance in our directive.
Luckily, Angular has simplified the process and provides the injectable — NgControl. */
import { NgControl } from '@angular/forms';
import { Directive } from '@angular/core';

@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective {
  constructor(private controlDir: NgControl) { }
}
