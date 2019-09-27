import * as Rx from "rxjs";

let observable = Rx.Observable.create((observer: any) => {
  observer.next("Hey guys!");
});

observable.subscribe((x: any) => console.log(x));
