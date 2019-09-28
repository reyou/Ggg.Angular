import * as Rx from "rxjs";
import { skipUntil } from "rxjs/operators";

let observable1 = Rx.Observable.create((data: any) => {
  let i = 1;
  setInterval(() => {
    data.next(i++);
  }, 1000);
});

let observable2 = new Rx.Subject();

setTimeout(() => {
  observable2.next(`Hey!`);
}, 3000);

let newObs = observable1.pipe(skipUntil(observable2));

newObs.subscribe((x: any) => addItem(x));

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
