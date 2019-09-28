import * as Rx from "rxjs";

let subject = new Rx.ReplaySubject(30, 500);

subject.subscribe(
  data => addItem(`Observer 1: ${data}`),
  err => addItem(err),
  () => addItem(`Observer 1 Completed`)
);

let i = 1;
let int = setInterval(() => {
  subject.next(i++);
}, 100);

setTimeout(() => {
  let observer2 = subject.subscribe(
    data => addItem(`Observer 2: ${data}`),
    err => addItem(err),
    () => addItem(`Observer 2 Completed`)
  );
}, 500);

subject.next(`A final thing has been sent.`);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
