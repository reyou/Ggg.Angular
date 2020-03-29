import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ApiService } from "./api.service";
import { GoogleBooksAPI } from "./google-books-api.service";

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ApiService, GoogleBooksAPI],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
