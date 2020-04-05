// https://rxjs-dev.firebaseapp.com/guide/subject#Multicasted-Observables

import { from, Observable, Subject, ConnectableObservable } from "rxjs";
import { multicast } from "rxjs/operators";
export default class Intro3MulticastedObservables {
  public run() {
    const source: Observable<number> = from([1, 2, 3]);
    const subject = new Subject();
    const multicasted = source.pipe(
      multicast(subject)
    ) as ConnectableObservable<number>;

    // These are, under the hood, `subject.subscribe({...})`:
    multicasted.subscribe({
      next: (v) => {
        console.log(`observerA: ${v}`);
      },
    });

    multicasted.subscribe({
      next: (v) => {
        console.log(`observerB: ${v}`);
      },
    });

    // This is, under the hood, `source.subscribe(subject)`:
    multicasted.connect();
  }
}
