import { Directive } from '@angular/core';

/* First, we need to create a directive. We want to prevent consumers from adding
specific selectors to apply our directive, so we take advantage of
existing selectors and target them. */
@Directive({
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective { }
