/* As an example, if you click one of the Add To Cart buttons and then click the browser’s reload button,
the HTTP server will return the contents of the index.html file, and Angular will immediately jump to the
cart detail component, skipping over the part of the application that allows the user to select products.
For some applications, being able to start using different URLs makes sense, but if that’s not the case,
then Angular supports route guards, which are used to govern the routing system.
To prevent the application from starting with the /cart or /order URL, I added a file called
storeFirst.guard.ts */
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { StoreComponent } from "./store/store.component";
@Injectable()
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
