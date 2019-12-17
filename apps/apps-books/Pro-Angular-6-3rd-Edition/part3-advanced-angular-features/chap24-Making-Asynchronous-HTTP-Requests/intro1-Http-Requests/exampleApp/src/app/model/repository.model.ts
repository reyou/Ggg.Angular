import { Injectable } from '@angular/core';
import { Product } from './product.model';
// import { StaticDataSource } from "./static.datasource";
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
@Injectable()
export class Model {
  private products: Product[] = new Array<Product>();

  private locator = (p: Product, id: number) => p.id === id;
  constructor(private dataSource: RestDataSource) {
    // this.products = new Array<Product>();
    // this.dataSource.getData().forEach(p => this.products.push(p));
    this.dataSource.getData().subscribe(data => (this.products = data));
  }
  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }
  saveProduct(product: Product) {
    if (product.id === 0 || product.id == null) {
      this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
    } else {
      this.dataSource.updateProduct(product).subscribe(p => {
        const index = this.products.findIndex(item => this.locator(item, p.id));
        this.products.splice(index, 1, p);
      });
    }
  }
  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(() => {
      const index = this.products.findIndex(p => this.locator(p, id));
      if (index > -1) {
        /* (start, deleteCount) => Removes elements from an array and, if necessary,
        inserts new elements in their place, returning the deleted elements. */
        this.products.splice(index, 1);
      }
    });
  }
  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
