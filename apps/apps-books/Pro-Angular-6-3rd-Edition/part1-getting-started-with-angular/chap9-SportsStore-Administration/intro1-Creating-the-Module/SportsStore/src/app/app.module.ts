import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "./store/store.module";
import { AppComponent } from "./app.component";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";
import { StoreFirstGuard } from "./storeFirst.guard";
/* The new route tells Angular that when the application navigates to the /admin URL, 
it should load a feature module defined by a class called AdminModule 
from the admin/admin.module.ts file, whose path is specified relative to the app.module.ts 
file. When Angular processes the admin module, it will incorporate the routing information 
it contains into the overall set of routes and complete the navigation. */
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        canActivate: [StoreFirstGuard],
        component: StoreComponent
      },
      {
        path: "cart",
        canActivate: [StoreFirstGuard],
        component: CartDetailComponent
      },
      {
        path: "checkout",
        canActivate: [StoreFirstGuard],
        component: CheckoutComponent
      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
