import { fromEvent } from 'rxjs';
import { throttleTime, scan, count } from 'rxjs/operators';

export default class Intro4Flow {
  public run() {
    let flowButton = document.getElementById('flow-Button');
    fromEvent(flowButton, 'click')
      .pipe(
        throttleTime(1000),
        scan(count => count + 1, 0)
      )
      .subscribe({
        next: count => {
          document.getElementById(
            'flow-Result'
          ).innerHTML = `Clicked ${count} times`;
        }
      });
  }
}
