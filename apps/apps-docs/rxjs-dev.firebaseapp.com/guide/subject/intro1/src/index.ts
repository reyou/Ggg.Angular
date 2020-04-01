import Intro1Map from './intro1-map';
import Intro2First from './intro2-first';

export default class Index {
  constructor() {
    new Intro1Map().run();
    new Intro2First().run();
  }
}
new Index();
