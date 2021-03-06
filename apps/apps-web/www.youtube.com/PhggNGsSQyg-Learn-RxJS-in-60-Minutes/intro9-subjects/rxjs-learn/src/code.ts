import * as Rx from "rxjs";

let subject = new Rx.Subject();

subject.subscribe(
  data => addItem(`Observer 1: ${data}`),
  err => addItem(err),
  () => addItem(`Observer 1 Completed`)
);

subject.next(`The first thing has been sent.`);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
