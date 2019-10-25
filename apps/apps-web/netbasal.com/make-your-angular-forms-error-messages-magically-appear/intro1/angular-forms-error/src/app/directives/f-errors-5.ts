import { Inject, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from './f-errors-4';

/* Note that we’re also bypassing the error object for more advanced errors.
Now that we have the errors, let’s continue with the directive implementation. */
export class ControlErrorsDirective implements OnInit {

  constructor(private control: NgControl, @Inject(FORM_ERRORS) private errors
  ) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      const controlErrors = this.control.errors;
      if (controlErrors) {
        const firstKey = Object.keys(controlErrors)[0];
        const getError = this.errors[firstKey];
        const text = getError(controlErrors[firstKey]);
      }
    });
  }

}

