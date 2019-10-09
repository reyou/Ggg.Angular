import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
/* The RouterModule.forChild method is used to define the 
routing configuration for the feature module, which is then included 
in the module’s imports property. */
let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent },
  { path: "main", component: AdminComponent },
  { path: "**", redirectTo: "auth" }
]);
@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {}
