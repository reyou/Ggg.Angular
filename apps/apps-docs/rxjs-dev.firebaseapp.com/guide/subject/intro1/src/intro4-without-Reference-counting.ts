// https://rxjs-dev.firebaseapp.com/guide/subject#Reference-counting

import {
  from,
  Observable,
  Subject,
  ConnectableObservable,
  interval,
  Subscription,
} from "rxjs";
import { multicast } from "rxjs/operators";
export default class Intro4WithoutReferenceCounting {
  public run() {
    const source: Observable<number> = interval(500);
    const subject = new Subject();
    const multicasted: ConnectableObservable<number> = source.pipe(
      multicast(subject)
    ) as ConnectableObservable<number>;

    let subscription1: Subscription,
      subscription2: Subscription,
      subscriptionConnect: Subscription;

    subscription1 = multicasted.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
      },
    });

    // We should call `connect()` here, because the first
    // subscriber to `multicasted` is interested in consuming values
    subscriptionConnect = multicasted.connect();

    setTimeout(() => {
      subscription2 = multicasted.subscribe({
        next: (v) => {
          console.log(`observerB: ${v}`);
        },
      });
    }, 600);

    setTimeout(() => {
      subscription1.unsubscribe();
    }, 1200);

    // We should unsubscribe the shared Observable execution here,
    // because `multicasted` would have no more subscribers after this
    setTimeout(() => {
      subscription2.unsubscribe();
      // for the shared Observable
      subscriptionConnect.unsubscribe();
    }, 2000);
  }
}
