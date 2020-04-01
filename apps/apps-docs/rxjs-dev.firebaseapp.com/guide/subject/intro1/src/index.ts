import Intro1Subject from './intro1-subject';
import Intro2SubjectIsAnObserver from './intro2-Subject-is-an-Observer';

export default class Index {
  constructor() {
    new Intro1Subject();
    new Intro2SubjectIsAnObserver().run();
  }
}
new Index();
