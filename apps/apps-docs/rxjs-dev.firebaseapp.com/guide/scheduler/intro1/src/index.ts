import Intro1AsyncScheduler from "./intro1-asyncScheduler";
import Intro2AsyncSchedulerNoAsync from "./intro2-noAsync";
import Intro3ProxyObserver from "./intro3-proxyObserver";

export default class Index {
  constructor() {
    new Intro1AsyncScheduler();
    new Intro2AsyncSchedulerNoAsync();
    new Intro3ProxyObserver().run();
  }
}
new Index();
