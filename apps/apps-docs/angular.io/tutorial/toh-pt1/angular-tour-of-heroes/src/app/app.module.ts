import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { MessagesComponent } from "./messages/messages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}