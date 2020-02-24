import { Observable, Subscriber } from "rxjs";

// This function runs when subscribe() is called
function sequenceSubscriber(observer: Subscriber<number>) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return {
    unsubscribe() {
      console.log("unsubscribe is called.");
    }
  };
}

// Create a new Observable that will deliver the above sequence
const sequence: Observable<number> = new Observable(sequenceSubscriber);

// execute the Observable and print the result of each notification
sequence.subscribe({
  next(num) {
    console.log(num);
  },
  complete() {
    console.log("Finished sequence");
  }
});

// Logs:
// 1
// 2
// 3
// Finished sequence
