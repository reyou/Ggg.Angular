import { fromEvent, Subscription } from 'rxjs';

export default class Intro2Unsubscribe {
  public run() {
    let subscription = this.subscribe();
    let button = document.getElementById('unsubscribe-Button');
    let buttonObs = fromEvent(button, 'click');
    buttonObs.subscribe(() => {
      if (subscription.closed) {
        subscription = this.subscribe();
      } else {
        subscription.unsubscribe();
      }
    });
  }
  subscribe(): Subscription {
    let obs = fromEvent(document, 'mousemove');
    return obs.subscribe({
      next: (event: MouseEvent) => {
        document.getElementById(
          'unsubscribe-Result'
        ).innerHTML = `Mouse: ${event.offsetX} - ${event.offsetY}`;
      }
    });
  }
}
