import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TemplateFormsComponent } from "./template-forms/template-forms.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { appRoutingModule } from "./app.rounting";

@NgModule({
  declarations: [AppComponent, TemplateFormsComponent, ReactiveFormsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
