import { fromEvent } from "rxjs";

export default class Intro1 {
  run() {
    fromEvent(document, "click").subscribe(() => console.log("Clicked!"));
  }
}
