import { Model } from './repository.model';
// import { StaticDataSource } from './static.datasource';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource, REST_URL } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    Model,
    RestDataSource,
    {
      provide: REST_URL,
      useValue: `http://${location.hostname}:3500/products`
    }
  ]
})
export class ModelModule {}
