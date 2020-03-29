import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

export default class Intro2Purity {
  // export declare function scan<T, R>(accumulator: (acc: R, value: T, index: number) => R, seed: R): OperatorFunction<T, R>;
  // The scan operator works just like reduce for arrays.
  // It takes a value which is exposed to a callback.
  // The returned value of the callback will then become the next value exposed the next time the callback runs.
  run() {
    fromEvent(document, "click")
      .pipe(scan((count: number) => count + 1, 0))
      .subscribe(count => console.log(`Clicked ${count} times`));
  }
}
