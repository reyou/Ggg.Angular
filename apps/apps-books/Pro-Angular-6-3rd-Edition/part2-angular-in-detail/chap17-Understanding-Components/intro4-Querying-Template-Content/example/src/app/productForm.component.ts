import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";
import { Intro1Class } from "./Intro1Class";
@Component({
  selector: "paProductForm",
  templateUrl: "productForm.component.html",
  styleUrls: ["productForm.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  @Output("paNewProduct")
  newProductEvent = new EventEmitter<Product>();

  @Output("intro1EventListener")
  intro1EventListener = new EventEmitter<Intro1Class>();
  intro1Class: Intro1Class;
  submitForm(form: any) {
    this.formSubmitted = true;
    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
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
