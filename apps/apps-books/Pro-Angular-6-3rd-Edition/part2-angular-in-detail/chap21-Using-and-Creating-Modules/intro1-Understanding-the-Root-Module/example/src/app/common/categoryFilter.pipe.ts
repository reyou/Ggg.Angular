import { Pipe } from '@angular/core';
import { Product } from '../models/product.model';
@Pipe({
  name: 'filter',
  pure: false
})
export class PaCategoryFilterPipe {
  transform(products: Product[], category: string): Product[] {
    return category == undefined || category == '[All]'
      ? products
      : products.filter(p => p.category == category);
  }
}
