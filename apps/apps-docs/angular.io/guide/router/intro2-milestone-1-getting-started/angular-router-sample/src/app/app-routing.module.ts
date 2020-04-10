import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrisisListComponent } from "./crisis-list/crisis-list.component";
// import { HeroListComponent }  from './hero-list/hero-list.component';  // <-- delete this line
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SelectivePreloadingStrategyService } from "./selective-preloading-strategy.service";

const appRoutes: Routes = [
  {
    path: "crisis-center",
    loadChildren: () =>
      import("./crisis-center/crisis-center.module").then(
        (m) => m.CrisisCenterModule
      ),
    data: { preload: true },
  },
  // { path: 'heroes',     component: HeroListComponent }, // <-- delete this line
  { path: "", redirectTo: "/heroes", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
