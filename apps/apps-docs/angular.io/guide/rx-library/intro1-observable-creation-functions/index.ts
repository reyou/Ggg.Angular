import { interval } from "rxjs";

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
secondsCounter.subscribe({
  next: n => {
    console.log(`Sub1: It's been ${n} seconds since subscribing!`);
  }
});
let subscription2 = secondsCounter.subscribe({
  next: n => {
    console.log(`Sub2: It's been ${n} seconds since subscribing!`);
  },
  complete: () => {
    console.log("Sub2 completed.");
  }
});

setTimeout(() => {
  subscription2.unsubscribe();
}, 3000);
