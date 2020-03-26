import { AsyncScheduler } from "rxjs/internal/scheduler/AsyncScheduler";
import { tick } from "@angular/core/testing";

export class AsyncZoneTimeInSyncKeeper {
  time = 0;
  constructor() {
    spyOn(AsyncScheduler, "now").and.callFake(() => {
      /* tslint:disable-next-line */
      console.info("time", this.time);
      return this.time;
    });
  }
  tick(time?: number) {
    if (typeof time !== "undefined") {
      this.time += time;
      tick(this.time);
    } else {
      tick();
    }
  }
}
