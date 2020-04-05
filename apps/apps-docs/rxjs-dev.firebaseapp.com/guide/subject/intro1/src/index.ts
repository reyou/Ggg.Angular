import Intro1Subject from "./intro1-subject";
import Intro2SubjectIsAnObserver from "./intro2-Subject-is-an-Observer";
import Intro3MulticastedObservables from "./intro3-Multicasted-Observables";
import Intro4WithoutReferenceCounting from "./intro4-without-Reference-counting";

export default class Index {
  constructor() {
    new Intro1Subject();
    new Intro2SubjectIsAnObserver();
    new Intro3MulticastedObservables();
    new Intro4WithoutReferenceCounting().run();
  }
}
new Index();
