import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";

/* The change to the providers property tells Angular
that when it needs to create an instance of a class with a 
StaticDataSource constructor parameter, it should use a RestDataSource instead. 
Since both objects define the same methods, the dynamic JavaScript type
system means that the substitution is seamless. */
@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    StaticDataSource,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource }
  ]
})
export class ModelModule {}
