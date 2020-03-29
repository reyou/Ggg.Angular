import { fromEvent } from "rxjs";
import Intro2Purity from "./intro2-Purity";
import Intro1 from "./intro1-click";
import Intro3Scan from "./intro3-scan";

export default class Index {
  constructor() {
    new Intro1();
    new Intro2Purity();
    new Intro3Scan().run();
  }
}
new Index();
