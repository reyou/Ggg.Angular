import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { Intro1Directive } from "./directives/intro1.directive";
import { Intro2Directive } from "./directives/intro2.directive";
import { PaModel } from "./twoway.directive";

/*The imports property of the NgModule decorator specifies the dependencies of the application. 
Adding FormsModule to the list of dependencies enables the form features and makes them available for use
throughout the application. */
@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ProductComponent,
    PaAttrDirective,
    Intro1Directive,
    Intro2Directive,
    PaModel
  ],
  bootstrap: [ProductComponent]
})
export class AppModule {}
