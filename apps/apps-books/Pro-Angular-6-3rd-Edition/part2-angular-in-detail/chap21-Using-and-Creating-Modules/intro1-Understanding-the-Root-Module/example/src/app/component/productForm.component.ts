import {
  Component,
  Output,
  EventEmitter,
  Inject,
  SkipSelf
} from '@angular/core';
import { Product } from '../models/product.model';
import { ProductFormGroup } from '../models/form.model';

import { Model } from '../models/repository.model';
import { VALUE_SERVICE } from 'src/app/common/valueDisplay.directive';
@Component({
  selector: 'paProductForm',
  templateUrl: 'productForm.component.html',
  //   providers: [{ provide: VALUE_SERVICE, useValue: 'Oranges' }],
  viewProviders: [{ provide: VALUE_SERVICE, useValue: 'Oranges' }]
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  // @Output('paNewProduct')
  // newProductEvent = new EventEmitter<Product>();

  constructor(
    private model: Model,
    @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string
  ) {
    console.log('Service Value: ' + serviceValue);
  }
  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      // this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSubmitted = false;
    }
  }
  intro1Click() {}
}
