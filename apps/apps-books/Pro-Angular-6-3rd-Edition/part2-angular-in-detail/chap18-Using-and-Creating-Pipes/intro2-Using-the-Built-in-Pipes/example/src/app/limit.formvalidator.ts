/* Tracks the value and validation status of an individual form control.
This is one of the three fundamental building blocks of Angular forms, along with FormGroup and FormArray. 
It extends the AbstractControl class that implements most of the base functionality for accessing the value, 
validation status, user interactions and events. */

import { FormControl } from "@angular/forms";
/* Custom validators are factories that create functions used to perform validation. In this case, the
LimitValidator class defines the Limit method, which is static and is the factory that returns the
validation function. The argument to the Limit method is the largest value that should be allowed to pass
validation. */
export class LimitValidator {
  static Limit(limit: number) {
    return (control: FormControl): { [key: string]: any } => {
      let val = Number(control.value);
      if (val != NaN && val > limit) {
        return {
          limit: {
            limit: limit,
            actualValue: val
          }
        };
      } else {
        return null;
      }
    };
  }
}
