import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LightswitchComponent } from "./lightswitch-component";
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [AppComponent, LightswitchComponent, BannerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
