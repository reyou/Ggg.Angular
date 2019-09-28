import * as Rx from "rxjs";
import { map } from "rxjs/operators";

let observable = Rx.Observable.create((observer: any) => {
  observer.next(`Hey guys!`);
}).pipe(map((val: any) => val.toUpperCase()));

observable.subscribe((x: any) => {
  addItem(x);
});

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
