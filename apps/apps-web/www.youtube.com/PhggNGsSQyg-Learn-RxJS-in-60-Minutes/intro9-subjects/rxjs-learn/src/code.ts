import * as Rx from "rxjs";
import { setTimeout } from "timers";

let observable = Rx.fromEvent(document, "mousemove");

setTimeout(() => {
  let subscription = observable.subscribe((x: any) => addItem(x));
}, 2000);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
