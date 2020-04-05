// https://rxjs-dev.firebaseapp.com/guide/subject#Reference-counting

import {
  from,
  Observable,
  Subject,
  ConnectableObservable,
  interval,
  Subscription,
  BehaviorSubject,
} from "rxjs";
import { multicast, refCount } from "rxjs/operators";
export default class Intro6BehaviorSubject {
  public run() {
    const subject = new BehaviorSubject(0);
    subject.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
      },
    });
    
    subject.next(1);
    subject.next(2);

    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    subject.next(3);
  }
}
