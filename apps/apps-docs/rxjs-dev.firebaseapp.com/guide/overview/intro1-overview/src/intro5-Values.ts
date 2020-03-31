import { fromEvent } from 'rxjs';
import { throttleTime, map, scan } from 'rxjs/operators';

export default class Intro5Values {
  public run() {
    let button = document.getElementById('Subscribe-Values-Button');
    fromEvent(button, 'click').subscribe({
      next: _ => {
        fromEvent(document, 'click')
          .pipe(
            throttleTime(1000),
            map((event: MouseEvent) => event.clientX),
            scan((count, clientX) => count + clientX, 0)
          )
          .subscribe({
            next: count => {
              document.getElementById(
                'Values-Result'
              ).innerHTML = `Count: ${count}`;
            }
          });
      }
    });
  }
}
