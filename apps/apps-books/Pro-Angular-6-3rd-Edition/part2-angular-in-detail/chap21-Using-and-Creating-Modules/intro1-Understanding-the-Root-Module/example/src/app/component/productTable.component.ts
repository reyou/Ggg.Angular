import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { Model } from '../models/repository.model';
import { Product } from '../models/product.model';
import { DiscountService } from '../common/discount.service';
import { LogService } from '../common/log.service';
@Component({
  selector: 'paProductTable',
  templateUrl: 'productTable.component.html',
  providers: [LogService]
})
export class ProductTableComponent {
  // @Input('model')
  // dataModel: Model;
  taxRate: number = 10;
  categoryFilter: string = '[All]';
  constructor(private dataModel: Model) {}
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
  dateString: string = '2020-02-20T00:00:00.000Z';
  dateNumber: number = 1582156800000;
}
