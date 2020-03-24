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
  it("drains the zone task by task 2", fakeAsync(() => {
    setTimeout(() => {
      let i = 0;
      const handle = setInterval(() => {
        if (++i === 5) {
          clearInterval(handle);
        }
      }, 1000);
      let j = 0;
      const handle2 = setInterval(() => {
        if (++j === 3) {
          clearInterval(handle2);
        }
      }, 1000);
    }, 10000);
    tick(15000);
  }));
});
