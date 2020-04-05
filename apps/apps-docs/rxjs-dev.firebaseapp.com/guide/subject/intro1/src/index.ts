import Intro1Subject from "./intro1-subject";
import Intro2SubjectIsAnObserver from "./intro2-Subject-is-an-Observer";
import Intro3MulticastedObservables from "./intro3-Multicasted-Observables";
import Intro4ReferenceCounting from "./intro4-Reference-counting";

export default class Index {
  constructor() {
    new Intro1Subject();
    new Intro2SubjectIsAnObserver();
    new Intro3MulticastedObservables();
    new Intro4ReferenceCounting().run();
  }
}
new Index();
