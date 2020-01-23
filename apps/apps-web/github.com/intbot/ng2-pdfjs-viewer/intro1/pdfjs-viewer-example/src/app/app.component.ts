// https://ng2-pdfjs-viewer.azurewebsites.net/events
import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import { PdfJsViewerComponent } from "ng2-pdfjs-viewer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pdfjs-viewer-example";
  totalPage = 0;
  @ViewChild("pdfViewer", { static: false })
  pdfViewer: PdfJsViewerComponent;

  constructor() {}

  getPageText = async (pdf: any, pageNo: number) => {
    const page = await pdf.getPage(pageNo);
    const tokenizedText = await page.getTextContent();
    const pageText = tokenizedText.items.map(token => token.str).join("");
    return pageText;
  };

  // https://stackoverflow.com/questions/40635979/how-to-correctly-extract-text-from-a-pdf-using-pdf-js
  public async text() {
    let pdf = this.getPdfDocument();
    let pdfApp = this.getPdfViewerApplication();
    let currentPage = pdfApp.page;
    let allText = await this.getPageText(pdf, currentPage);
    alert(allText);
  }
  getPdfDocument() {
    return this.getPdfViewerApplication().pdfDocument;
  }
  getPdfViewerApplication() {
    return this.pdfViewer.PDFViewerApplication;
  }
 
  public async next() {
    let pdfApp = this.getPdfViewerApplication();
    let pagesCount = pdfApp.pagesCount;
    let currentPage = pdfApp.page;
    if (currentPage == pagesCount) {
      return;
    }
    pdfApp.page++;
  }
  public prev() {
    let pdfApp = this.getPdfViewerApplication();
    let currentPage = pdfApp.page;
    if (currentPage === 1) {
      return;
    }
    pdfApp.page--;
  }
}
