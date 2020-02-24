import { Observable } from "rxjs";

function fromEvent(target: any, eventName: any): any {
  return new Observable(observer => {
    const handler = (e: Event) => observer.next(e);

    // Add the event handler to the target
    target.addEventListener(eventName, handler);

    return () => {
      // Detach the event handler from the target
      target.removeEventListener(eventName, handler);
    };
  });
}

const ESC_KEY = 27;
const nameInput = document.getElementById("name") as HTMLInputElement;
const subscription = fromEvent(nameInput, "keydown").subscribe(
  (e: KeyboardEvent) => {
    if (e.keyCode === ESC_KEY) {
      nameInput.value = "";
    }
  }
);
