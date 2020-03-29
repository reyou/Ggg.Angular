import { fromEvent } from "rxjs";
import Intro2Purity from "./intro2-Purity";
import Intro1 from "./intro1-click";

export default class Index {
  constructor() {
    // new Intro1().run();
    new Intro2Purity().run();
  }
}
new Index();
