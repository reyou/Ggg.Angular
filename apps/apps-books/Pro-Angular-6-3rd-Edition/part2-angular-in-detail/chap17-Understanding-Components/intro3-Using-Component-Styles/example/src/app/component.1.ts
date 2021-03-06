/* type: controller */
/* view: template.html */
/* modelClass: repository.model.ts */
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { ProductFormGroup } from "./form.model";
import { Intro1Class } from "./Intro1Class";
@Component({
  selector: "app",
  templateUrl: "template.html"
})
export class ProductComponent {
  model: Model = new Model();
  intro1: Intro1Class = new Intro1Class();
  form: ProductFormGroup = new ProductFormGroup();
  showTable: boolean = true;
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] {
    return this.model.getProducts();
  }
  newProduct: Product = new Product();
  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }
  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
  intro1OnClick(intro1Ref: Intro1Class) {
    alert(JSON.stringify(intro1Ref));
  }
  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  formSubmitted: boolean = false;
  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
