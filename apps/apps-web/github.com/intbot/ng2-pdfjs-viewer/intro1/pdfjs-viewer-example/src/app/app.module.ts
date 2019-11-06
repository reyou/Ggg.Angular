import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PdfJsViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
