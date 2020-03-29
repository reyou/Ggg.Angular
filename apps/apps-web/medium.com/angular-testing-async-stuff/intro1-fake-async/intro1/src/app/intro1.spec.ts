import { fakeAsync, tick } from "@angular/core/testing";

describe("Testing async stuff in the fakedAsync zone", () => {
  it("drains the zone task by task", fakeAsync(() => {
    setTimeout(() => {
      let i = 0;
      const handle = setInterval(() => {
        if (i++ === 5) {
          clearInterval(handle);
        }
      }, 1000);
    }, 10000);
    tick(16 * 1000);
  }));

  fit("drains the zone task by task 2", fakeAsync(() => {
    console.log("INITIAL DATE", new Date().toUTCString());
    setTimeout(() => {
      let i = 0;
      const handle = setInterval(() => {
        console.log("First Interval:", i);
        if (++i === 5) {
          console.log("Clear First Interval:", i);
          clearInterval(handle);
        }
      }, 1000);
      let j = 0;
      const handle2 = setInterval(() => {
        console.log("Second Interval:", j);
        if (++j === 3) {
          console.log("Clear Second Interval:", j);
          clearInterval(handle2);
        }
      }, 1000);
    }, 10000);
    console.log("DATE BEFORE TICK", new Date().toUTCString());
    tick(15000);
    console.log("DATE AFTER TICK", new Date().toUTCString());
  }));
});
