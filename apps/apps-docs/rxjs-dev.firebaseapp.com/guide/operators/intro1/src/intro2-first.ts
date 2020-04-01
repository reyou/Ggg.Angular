import { of } from 'rxjs';
import { first } from 'rxjs/operators';

export default class Intro2First {
  public run() {
    first()(of(1, 2, 3)).subscribe(v => {
      console.log(`value: ${v}`);
      document.getElementById('first-Result').innerHTML += `${v} `;
    });
  }
}
