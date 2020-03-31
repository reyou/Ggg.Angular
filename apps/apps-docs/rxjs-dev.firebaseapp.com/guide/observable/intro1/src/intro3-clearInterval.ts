import { Observable } from 'rxjs';

export default class Intro3ClearInterval {
  public run() {
    const observable = new Observable(function subscribe(subscriber) {
      // Keep track of the interval resource
      const intervalId = setInterval(() => {
        subscriber.next('hi');
      }, 1000);

      // Provide a way of canceling and disposing the interval resource
      return function unsubscribe() {
        console.log('Interval Cleared');
        clearInterval(intervalId);
      };
    });
    let subscription = observable.subscribe({
      next: message => {
        console.log(message);
      }
    });
    setTimeout(() => {
      subscription.unsubscribe();
    }, 3 * 1000);
  }
}
