import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";

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
  public productsPerPage = 4;
  public selectedPage = 1;
  constructor(
    private repository: ProductRepository,
    private cart: Cart,
    private router: Router
  ) {}
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }
  get categories(): string[] {
    return this.repository.getCategories();
  }
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }
  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl("/cart");
  }
}
