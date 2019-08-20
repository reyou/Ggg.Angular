// https://angular.io/guide/ngmodule-faq
import { NgModule } from '@angular/core';

// https://angular.io/api/platform-browser/BrowserModule
// https://angular.io/guide/frequent-ngmodules
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

// imports are modules
// declarations are components
// bootstraps are components
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
