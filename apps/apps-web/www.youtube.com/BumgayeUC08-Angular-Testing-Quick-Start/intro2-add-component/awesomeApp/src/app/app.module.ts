import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AlertButtonComponent } from "./alert-button/alert-button.component";

@NgModule({
  declarations: [AppComponent, AlertButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  exports: [AlertButtonComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
