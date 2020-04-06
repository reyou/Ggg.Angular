import { Observable, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";
export default class Intro3ProxyObserver {
  public run() {
    console.log("Intro3ProxyObserver");

    let observable = new Observable((proxyObserver) => {
      proxyObserver.next(1);
      proxyObserver.next(2);
      proxyObserver.next(3);
      proxyObserver.complete();
    }).pipe(observeOn(asyncScheduler));

    let finalObserver = {
      next: (x: number) => {
        console.log("got value " + x);
      },
      error: (err: any) => {
        console.error("something wrong occurred: " + err);
      },
      complete: () => {
        console.log("done");
      },
    };

    console.log("just before subscribe");
    observable.subscribe(finalObserver);
    console.log("just after subscribe");
  }
}
