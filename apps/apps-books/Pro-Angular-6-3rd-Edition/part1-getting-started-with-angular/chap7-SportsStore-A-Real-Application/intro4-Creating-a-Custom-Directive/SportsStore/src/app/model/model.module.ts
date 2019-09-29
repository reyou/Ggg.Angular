import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
// The @NgModule decorator is used to create feature modules,
// and its properties tell Angular how the
// module should be used.
// There is only one property in this module, providers,
// and it tells Angular which classes should be used as services
// for the dependency injection feature, which is described in Chapters 19
// and 20. Features modules—and the @NgModule decorator—are
// described in Chapter 21.

@NgModule({
  providers: [ProductRepository, StaticDataSource]
})
export class ModelModule {}
