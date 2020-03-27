import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

let button: HTMLElement = <HTMLElement>document.getElementById('button');

let obsClick = fromEvent(button, 'click');
let obsInterval = interval(1000);

obsClick
  .pipe(
    switchMap((event: Event) => {
      console.log('Event Started:', event);
      return obsInterval;
    })
  )
  .subscribe({
    next: value => {
      console.log(value);
    },
    error: err => {
      console.error(err);
    },
    complete: () => {
      console.warn('completed!');
    }
  });
