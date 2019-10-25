/* Great, we have the control instance. Now, our goal is to display
an error only when the user begins to interact with the field.
To do so, we can use the control’s valueChanges observable. */

import { untilDestroyed } from 'ngx-take-until-destroy';
import { NgControl } from '@angular/forms';
import { OnInit, Self } from '@angular/core';

export class ControlErrorsDirective implements OnInit {

  constructor(@Self() private control: NgControl) { }

  ngOnInit() {
    this.control.valueChanges.pipe(
      untilDestroyed(this)
    ).subscribe(() => {
      // handle errors
    })
  }

}
