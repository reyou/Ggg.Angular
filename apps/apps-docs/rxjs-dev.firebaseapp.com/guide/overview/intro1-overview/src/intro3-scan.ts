import { fromEvent } from "rxjs";
import { scan, mapTo } from "rxjs/operators";

export default class Intro3Scan {
  run() {
    // const clicks = fromEvent(document, "click");
    const button = <HTMLElement>document.getElementById("scanButton");

    const scanClicks = fromEvent(button, "click");
    const ones = scanClicks.pipe(mapTo(1));
    const seed = 0;
    const count = ones.pipe(scan((acc, one) => acc + one, seed));
    count.subscribe(x => {
      console.log(x);
      document.getElementById("scanResult").innerHTML = x.toString();
    });
  }
}
