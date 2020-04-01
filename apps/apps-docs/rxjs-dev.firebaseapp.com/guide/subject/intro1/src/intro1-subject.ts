import { Subject } from 'rxjs';

export default class Intro1Subject {
  public run() {
    const subject = new Subject<number>();

    subject.subscribe({
      next: v => console.log(`observerA: ${v}`)
    });

    subject.subscribe({
      next: v => console.log(`observerb: ${v}`)
    });
    subject.next(1);
    subject.next(2);
  }
}

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
