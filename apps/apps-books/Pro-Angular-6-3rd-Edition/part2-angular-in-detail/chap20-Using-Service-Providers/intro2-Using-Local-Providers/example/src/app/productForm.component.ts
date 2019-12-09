import {
  Component,
  Output,
  EventEmitter,
  Inject,
  SkipSelf
} from '@angular/core';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';
import { Intro1Class } from './Intro1Class';
import { Model } from './repository.model';
import { VALUE_SERVICE } from 'src/valueDisplay.directive';
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

  @Output('intro1EventListener')
  intro1EventListener = new EventEmitter<Intro1Class>();
  intro1Class: Intro1Class;

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
  intro1Click() {
    this.intro1Class = new Intro1Class();
    this.intro1EventListener.emit(this.intro1Class);
  }
}
