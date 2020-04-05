import Intro1Subject from "./intro1-subject";
import Intro2SubjectIsAnObserver from "./intro2-Subject-is-an-Observer";
import Intro3MulticastedObservables from "./intro3-Multicasted-Observables";
import Intro4WithoutReferenceCounting from "./intro4-without-Reference-counting";
import Intro5ReferenceCounting from "./intro5-Reference-counting";
import Intro6BehaviorSubject from "./intro6-BehaviorSubject";
import Intro7ReplaySubject from "./intro7-ReplaySubject";

export default class Index {
  constructor() {
    new Intro1Subject();
    new Intro2SubjectIsAnObserver();
    new Intro3MulticastedObservables();
    new Intro4WithoutReferenceCounting();
    new Intro5ReferenceCounting();
    new Intro6BehaviorSubject();
    new Intro7ReplaySubject().run();
  }
}
new Index();
