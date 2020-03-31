import Intro1Example from './intro1-example';
import Intro2Unsubscribe from './intro2-unsubscribe';

export default class Index {
  constructor() {
    new Intro1Example().run();
    new Intro2Unsubscribe().run();
  }
}
new Index();
