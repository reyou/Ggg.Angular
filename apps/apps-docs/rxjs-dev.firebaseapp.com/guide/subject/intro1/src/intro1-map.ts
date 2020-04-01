import { of } from 'rxjs';
import { map } from 'rxjs/operators';

export default class Intro1Map {
  public run() {
    map((x: number) => x * x)(of(1, 2, 3)).subscribe(v => {
      console.log(`value: ${v}`);
      document.getElementById('map-Result').innerHTML += `${v} `;
    });
  }
}
