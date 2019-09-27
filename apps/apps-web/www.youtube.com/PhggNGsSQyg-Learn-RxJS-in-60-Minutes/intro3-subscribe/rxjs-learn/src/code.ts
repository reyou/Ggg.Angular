import * as Rx from "rxjs";

let observable = Rx.Observable.create((observer: any) => {
  observer.next("Hey guys!");
  observer.next("How are you?");
  observer.complete();
  observer.next("This will not send");
});

observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

function addItem(val: any) {
  let node = document.createElement("li");
  let textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("output").appendChild(node);
}
