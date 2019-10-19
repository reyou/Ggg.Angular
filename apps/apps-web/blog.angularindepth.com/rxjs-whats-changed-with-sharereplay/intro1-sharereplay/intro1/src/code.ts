import { timer } from "rxjs";
import { shareReplay, takeUntil } from "rxjs/operators";
import { log } from "./share-replay-log";

// log returns Observable (Producer)
/*timer: Creates an Observable that starts emitting after an dueTime and emits ever 
increasing numbers after each period of time thereafter. */
const source = log(timer(100), "source");
// log returns Observable (Producer)
const shared = log(source.pipe(shareReplay(1)), "shared");
/*takeUntil: Emits the values emitted by the source
Observable until a notifier Observable emits a value.*/

shared
  .pipe(takeUntil(timer(50)))
  .subscribe((value: any) => console.log(`first received: ${value}`));

setTimeout(
  () =>
    shared.subscribe((value: any) => console.log(`second received: ${value}`)),
  150
);
