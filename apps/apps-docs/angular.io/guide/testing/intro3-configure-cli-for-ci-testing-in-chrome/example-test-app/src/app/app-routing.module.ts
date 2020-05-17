import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LightswitchComponent } from "./lightswitch-component";

const routes: Routes = [
  {
    path: "lightswitch",
    component: LightswitchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
