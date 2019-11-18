import { Routes, RouterModule } from "@angular/router";
import { TemplateFormsComponent } from "./template-forms/template-forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";

const routes: Routes = [
  {
    path: "template-forms",
    component: TemplateFormsComponent
  },
  {
    path: "reactive-forms",
    component: ReactiveFormsComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
