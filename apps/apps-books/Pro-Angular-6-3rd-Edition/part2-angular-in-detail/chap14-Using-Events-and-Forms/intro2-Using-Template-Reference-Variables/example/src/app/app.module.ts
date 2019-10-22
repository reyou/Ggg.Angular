import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
// import { AppComponent } from './app.component';
import { ProductComponent } from "./component";
import { FormsModule } from "@angular/forms";
/*The imports property of the NgModule decorator specifies the dependencies of the application. 
Adding FormsModule to the list of dependencies enables the form features and makes them available for use
throughout the application. */
@NgModule({
  declarations: [ProductComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule {}
