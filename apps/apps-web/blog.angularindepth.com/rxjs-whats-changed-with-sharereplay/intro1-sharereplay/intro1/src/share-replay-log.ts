import { defer, Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";

// Observable == Producer
// defer: Creates an Observable (Producer) that, on subscribe, calls an
// Observable factory to make an Observable for each new Observer.
/*finalize: Returns an Observable that mirrors the source Observable, 
but will call a specified function when the source terminates on complete or error. */
export const log = <T>(source: Observable<T>, name: string) =>
  defer(() => {
    console.log(`${name}: subscribed`);
    return source.pipe(
      tap({
        next: value => console.log(`${name}: ${value}`),
        complete: () => console.log(`${name}: complete`)
      }),
      finalize(() => console.log(`${name}: unsubscribed`))
    );
  });
