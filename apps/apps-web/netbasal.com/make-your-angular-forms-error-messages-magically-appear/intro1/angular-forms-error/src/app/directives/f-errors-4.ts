/* Before we continue, we need to provide an error map.
The key will be the error name and the value the text that will be displayed
to the user. We don’t want to repeat this in each control, as the texts will
likely be the same for each control. So instead, we’ll provide this via DI. */
import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: (error) => `This field is required`,
  minlength: ({ requiredLength, actualLength }) => `Expect ${requiredLength} but got ${actualLength}`
};

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});

