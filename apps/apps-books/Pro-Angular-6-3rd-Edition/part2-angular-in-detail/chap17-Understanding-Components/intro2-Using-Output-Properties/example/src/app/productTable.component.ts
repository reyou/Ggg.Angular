import { Component, Input } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { Intro1Class } from "./Intro1Class";

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
