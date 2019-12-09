// RxJS v6+
import { delay, take } from 'rxjs/operators';
import { forkJoin, of, interval, Subscription } from 'rxjs';

const myPromise = (val: any) =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example = forkJoin(
  //emit 'Hello' immediately
  of('Hello'),
  //emit 'World' after 1 second
  of('World').pipe(delay(1000)),
  //emit 0 after 1 second
  interval(1000).pipe(take(1)),
  //emit 0...1 in 1 second interval
  interval(1000).pipe(take(2)),
  //promise that resolves to 'Promise Resolved' after 5 seconds
  myPromise('RESULT')
);
//output: ["Hello", "World", 0, 1, "Promise Resolved: RESULT"]
const subscription: Subscription = example.subscribe({
  next: val => {
    console.log(val);
  }
});
console.log('subscription:', subscription);
