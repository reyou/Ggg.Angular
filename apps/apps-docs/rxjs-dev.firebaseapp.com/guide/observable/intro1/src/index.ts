import Intro1Example from './intro1-example';
import Intro2Unsubscribe from './intro2-unsubscribe';
import Intro3ClearInterval from './intro3-clearInterval';

export default class Index {
  constructor() {
    new Intro1Example().run();
    new Intro2Unsubscribe().run();
    new Intro3ClearInterval().run();
  }
}
new Index();
