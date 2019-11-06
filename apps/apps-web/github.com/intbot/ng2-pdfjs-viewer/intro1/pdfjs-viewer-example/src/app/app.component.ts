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
  getPageText = async (pdf: any, pageNo: number) => {
    const page = await pdf.getPage(pageNo);
    const tokenizedText = await page.getTextContent();
    const pageText = tokenizedText.items.map(token => token.str).join("");
    return pageText;
  };
  // https://stackoverflow.com/questions/40635979/how-to-correctly-extract-text-from-a-pdf-using-pdf-js
  public async text() {
    let pdf = this.pdfViewerOnDemand.PDFViewerApplication.pdfDocument;
    let allText = await this.getPageText(pdf, 2);
    alert(allText);
  }
}
