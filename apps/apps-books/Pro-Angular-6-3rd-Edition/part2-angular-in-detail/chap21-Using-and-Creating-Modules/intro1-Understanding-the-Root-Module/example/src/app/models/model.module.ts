import { NgModule } from '@angular/core';
import { Model } from './repository.model';
import { SimpleDataSource } from './datasource.model';
/* This purpose of a feature module is to selectively expose the contents of the module folder to the rest of the application. The @NgModule decorator for this module uses only the providers property to define class providers for the Model and SimpleDataSource services. When you use providers in a feature module, they are registered with the root module’s injector, which means they are available throughout the application, which is exactly what is required for the data model in the example application */
@NgModule({
  providers: [Model, SimpleDataSource]
})
export class ModelModule {}
