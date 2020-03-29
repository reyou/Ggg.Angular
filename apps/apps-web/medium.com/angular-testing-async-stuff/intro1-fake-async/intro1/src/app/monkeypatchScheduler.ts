import { Scheduler, Observable } from "rxjs";

declare var spyOn: Function;
export function monkeypatchScheduler(scheduler: Scheduler) {
  let observableMethods = [
    "concat",
    "defer",
    "empty",
    "forkJoin",
    "if",
    "interval",
    "merge",
    "of",
    "range",
    "throw",
    "zip"
  ];
  let operatorMethods = [
    "buffer",
    "concat",
    "delay",
    "distinct",
    "do",
    "every",
    "last",
    "merge",
    "max",
    "take",
    "timeInterval",
    "lift",
    "debounceTime"
  ];
  let injectFn = function(base: any, methods: string[]) {
    methods.forEach(method => {
      const orig = base[method];
      if (typeof orig === "function") {
        spyOn(base, method).and.callFake(function() {
          let args = Array.prototype.slice.call(arguments);
          if (
            args[args.length - 1] &&
            typeof args[args.length - 1].now === "function"
          ) {
            args[args.length - 1] = scheduler;
          } else {
            args.push(scheduler);
          }
          return orig.apply(this, args);
        });
      }
    });
  };
  injectFn(Observable, observableMethods);
  injectFn(Observable.prototype, operatorMethods);
}
