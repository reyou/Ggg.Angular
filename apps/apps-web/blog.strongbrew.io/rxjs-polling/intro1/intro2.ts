// https://blog.strongbrew.io/rxjs-polling/
import {
  interval,
  of,
  from,
  timer,
  Observable,
  Subject,
  merge,
  scheduled
} from 'rxjs';
import {
  switchMap,
  map,
  tap,
  concatMap,
  mergeAll,
  timeout
} from 'rxjs/operators';
import axios, { AxiosResponse } from 'axios';

// https://itnext.io/working-with-axios-and-rxjs-to-make-simple-ajax-service-module-6fda9ecdaf9f
const bitcoin$: Observable<AxiosResponse<any>> = from(
  axios.get('https://blockchain.info/ticker')
);

let manualRefresh = new Subject();
function refreshDataClick() {
  console.log({
    item: 'refreshDataClick'
  });
  manualRefresh.next('');
}
manualRefresh.pipe(
  concatMap((number: any, index: number) => {
    console.log({
      item: 'concatMap',
      number,
      index
    });
    return bitcoin$;
  })
);

const trigger$: Observable<number> = timer(0, 10000);
let polledBitcoin$ = trigger$.pipe(
  concatMap(_ => bitcoin$),
  map((response: AxiosResponse<any>) => {
    console.log({
      item: 'Data Fetched'
    });
    return response.data;
  })
);
polledBitcoin$.subscribe({
  next: (data: any) => {
    console.log(data.USD);
  }
});
setInterval(() => refreshDataClick(), 3000);
