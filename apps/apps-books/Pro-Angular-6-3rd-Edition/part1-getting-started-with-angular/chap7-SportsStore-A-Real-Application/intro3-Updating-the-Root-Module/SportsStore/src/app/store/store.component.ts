import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

/*The @Component decorator has been applied to the StoreComponent 
class, which tells Angular that it is a component.
The decorator’s properties tell Angular how to apply the component 
to HTML content(using an element called store) and how to find the 
component’s template(in a file called store.component.html).*/
@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public selectedCategory = null;
  constructor(private repository: ProductRepository) {}
  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
