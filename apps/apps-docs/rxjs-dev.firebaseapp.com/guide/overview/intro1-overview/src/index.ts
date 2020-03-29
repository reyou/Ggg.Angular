import { fromEvent } from "rxjs";
import Intro2Purity from "./intro2-Purity";

export default class Intro1 {
  constructor() {
    let intro2 = new Intro2Purity();
    intro2.run();
  }
}

new Intro1();
