import { interval, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

let obsClick = of([1, 2, 3]);
let obsInterval = interval(1000);

obsClick
  .pipe(
    switchMap((number: number[]) => {
      console.log('Event Started:', number);
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
