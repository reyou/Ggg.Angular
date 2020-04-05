// https://rxjs-dev.firebaseapp.com/guide/subject

import { ReplaySubject, AsyncSubject } from "rxjs";

export default class Intro8AsyncSubject {
  public run() {
    const subject = new AsyncSubject();
    console.log("Subscribing to AsyncSubject observerA");
    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.next(4);
    console.log("Subscribing to AsyncSubject observerB");
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });
    
    subject.next(5);
    subject.complete();
  }
}
