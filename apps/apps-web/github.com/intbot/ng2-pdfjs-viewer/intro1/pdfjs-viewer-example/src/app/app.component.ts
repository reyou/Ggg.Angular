import { Component, ViewChild } from "@angular/core";
import { PdfJsViewerComponent } from "ng2-pdfjs-viewer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("pdfViewerOnDemand", { static: false })
  pdfViewerOnDemand: PdfJsViewerComponent;

  title = "pdfjs-viewer-example";
  public next() {}
}
