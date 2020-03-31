import { fromEvent } from 'rxjs';
import Intro2Purity from './intro2-Purity';
import Intro1 from './intro1-click';
import Intro3Scan from './intro3-scan';
import Intro4Flow from './intro4-flow';
import Intro5Values from './intro5-Values';

export default class Index {
  constructor() {
    new Intro1();
    new Intro2Purity();
    new Intro3Scan().run();
    new Intro4Flow().run();
    new Intro5Values().run();
  }
}
new Index();
