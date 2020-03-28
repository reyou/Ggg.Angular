// https://blog.strongbrew.io/rxjs-polling/
import { interval, of, from, timer, Observable } from 'rxjs';
import { switchMap, map, tap, concatMap } from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';

// https://itnext.io/working-with-axios-and-rxjs-to-make-simple-ajax-service-module-6fda9ecdaf9f
const bitcoin$: Observable<AxiosResponse<any>> = from(
  axios.get('https://blockchain.info/ticker')
);
const trigger$: Observable<number> = timer(0, 1000);

let polledBitcoin$ = trigger$
  .pipe(
    concatMap((number: number, index: number) => {
      console.log({
        item: 'concatMap',
        number,
        index
      });
      return bitcoin$;
    }),
    map((response: AxiosResponse<any>) => {
      return response.data;
    })
    // map((response: { EUR: { last: number } }) => response.EUR.last)
  )
  .subscribe({
    next: (data: any) => {
      console.log({
        item: 'subscribe',
        data
      });
    }
  });
