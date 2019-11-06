import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { Intro1Class } from "./Intro1Class";
import { PaCellColor } from "./cellColor.directive";

@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
  /* Decorator that marks a class field as an input property and supplies configuration metadata. 
  The input property is bound to a DOM property in the template. 
  During change detection, Angular automatically updates the data property with the DOM property's value. */
  @Input("model")
  dataModel: Model;

  @Input("intro1")
  intro1Model: Intro1Class;
  showTable: boolean = true;
  /* Parameter decorator that configures a view query.
Use to get the QueryList of elements or directives from the view DOM. 
Any time a child element is added, removed, or moved, the query list will be updated, 
and the changes observable of the query list will emit a new value.
View queries are set before the ngAfterViewInit callback is called. */
  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor>;

  ngAfterViewInit() {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }
  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren.forEach((child, index) => {
        child.setColor(index % 2 ? true : false);
        console.log("ProductTableComponent.updateViewChildren()");
        console.log("child:", child);
        console.log("index:", index);
      });
    }, 0);
  }
  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }
  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }
  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
  getName() {
    return this.intro1Model.getName();
  }
}
