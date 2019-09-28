import * as Rx from "rxjs";

let subject = new Rx.BehaviorSubject(`First`);

subject.subscribe(
  data => addItem(`Observer 1: ${data}`),
  err => addItem(err),
  () => addItem(`Observer 1 Completed`)
);

subject.next(`The first thing has been sent.`);
subject.next(`...Observer 2 is about to subscribe...`);

let observer2 = subject.subscribe(
  data => addItem(`Observer 2: ${data}`),
  err => addItem(err),
  () => addItem(`Observer 2 Completed`)
);

subject.next(`The second thing has been sent.`);
subject.next(`A third thing has been sent.`);

observer2.unsubscribe();

subject.next(`A final thing has been sent.`);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
