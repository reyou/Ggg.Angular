import * as Rx from "rxjs";
import { share } from "rxjs/operators";
let observable = Rx.Observable.create((observer: any) => {
  try {
    observer.next("Hey guys!");
    observer.next("How are you?");
    setInterval(() => {
      observer.next("I am good");
    }, 2000);
    observer.next("What is the color?");
    // throw new Error("This is my bad!");
  } catch (err) {
    observer.error(err);
  }
}).pipe(share());

let observer = observable.subscribe(
  (x: any) => addItem(x + "-qqq"),
  (error: any) => addItem(error + "-www"),
  () => addItem("Completed" + "-eee")
);

setTimeout(() => {
  let observer2 = observable.subscribe((x: any) =>
    addItem("Subscriber 2: " + x)
  );
}, 1000);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
