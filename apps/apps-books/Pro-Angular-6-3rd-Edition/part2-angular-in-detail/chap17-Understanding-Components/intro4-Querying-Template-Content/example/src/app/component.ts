import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { Intro1Class } from "./Intro1Class";
@Component({
  selector: "app",
  templateUrl: "template.html",
  styles: ["/deep/ div { border: 2px black solid; font-style:italic }"]
})
export class ProductComponent {
  model: Model = new Model();
  intro1: Intro1Class = new Intro1Class();
  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
  intro1OnClick(intro1Ref: Intro1Class) {
    alert(JSON.stringify(intro1Ref));
  }
}
