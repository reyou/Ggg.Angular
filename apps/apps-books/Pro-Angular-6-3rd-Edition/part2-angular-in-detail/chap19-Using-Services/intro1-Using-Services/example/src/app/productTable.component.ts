import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";
@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.html"
})
export class ProductTableComponent {
  discounter: DiscountService = new DiscountService();
  @Input("model")
  dataModel: Model;
  taxRate: number = 10;
  categoryFilter: string = "[All]";
  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }
  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }
  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
  dateObject: Date = new Date(2020, 1, 20);
  dateString: string = "2020-02-20T00:00:00.000Z";
  dateNumber: number = 1582156800000;
}
