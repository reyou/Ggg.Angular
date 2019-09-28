import * as Rx from "rxjs";
import { merge } from "rxjs";

let observable = Rx.Observable.create((observer: any) => {
  observer.next(`Hey guys!`);
});

let observable2 = Rx.Observable.create((observer: any) => {
  observer.next(`How is it going?`);
});

let newObs = merge(observable, observable2);

newObs.subscribe((x: any) => {
  addItem(x);
});

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
