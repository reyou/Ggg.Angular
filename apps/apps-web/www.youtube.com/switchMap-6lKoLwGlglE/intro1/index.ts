import { interval, of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

let obs1 = of(1);
let obs2 = interval(2000);

obs1
  .pipe(
    switchMap((number: number) => {
      console.log('Event Started:', number);
      return obs2.pipe(map(num2 => num2 * num2));
    }),
    tap((logNumber: number) => {
      console.log('Log Number:', logNumber);
    })
  )
  .subscribe({
    next: value => {
      console.log('value:', value);
    },
    error: err => {
      console.error('err:', err);
    },
    complete: () => {
      console.warn('completed!');
    }
  });
