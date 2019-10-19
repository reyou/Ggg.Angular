import { interval, timer } from "rxjs";
import { shareReplay, takeUntil } from "rxjs/operators";
import { log } from "./share-replay-log";

const source = log(interval(100), "source");
const shared = log(
  source.pipe(
    shareReplay({
      bufferSize: 1,
      refCount: true
    })
  ),
  "shared"
);

shared
  .pipe(takeUntil(timer(150)))
  .subscribe(value => console.log(`received: ${value}`));
