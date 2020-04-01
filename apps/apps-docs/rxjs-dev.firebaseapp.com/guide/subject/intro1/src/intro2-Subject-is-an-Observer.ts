import { Subject, from } from 'rxjs';

export default class Intro2SubjectIsAnObserver {
  public run() {
    const subject = new Subject<number>();

    subject.subscribe({
      next: v => console.log(`observerA: ${v}`)
    });

    subject.subscribe({
      next: v => console.log(`observerb: ${v}`)
    });

    const observable = from([1, 2, 3]);

    // You can subscribe providing a Subject
    observable.subscribe(subject);
  }
}
// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
