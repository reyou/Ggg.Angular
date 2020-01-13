import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Model } from './repository.model';
import { RestDataSource } from './rest.datasource';
import { Product } from './product.model';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.model';
@Injectable()
export class ModelResolver {
  constructor(
    private model: Model,
    private dataSource: RestDataSource,
    private messages: MessageService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    // console.log('ModelResolver', route, state);
    if (this.model.getProducts().length == 0) {
      this.messages.reportMessage(new Message('Loading data...'));
      return this.dataSource.getData();
    }
  }
}
/*Resolvers are classes that define a resolve method that accepts two arguments. 
The first argument is an ActivatedRouteSnapshot object, which describes the route that is being navigated to using the properties described in Chapter 25. 
The second argument is a RouterStateSnapshot object, which describes the current route through a single property called url. 
These arguments can be used to adapt the resolver to the navigation that is about to be performed, 
although neither is required by the resolver in the listing, which uses the same behavior regardless of the routes that are being navigated to and from. */
