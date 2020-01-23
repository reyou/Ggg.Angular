// https://ng2-pdfjs-viewer.azurewebsites.net/events
import { Component, ViewChild } from "@angular/core";
import { PdfJsViewerComponent } from "ng2-pdfjs-viewer";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
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

  constructor(private http: HttpClient) {
    let url = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
    this.downloadFile(url).subscribe(res => {
      this.pdfViewer.pdfSrc = res; // pdfSrc can be Blob or Uint8Array
      this.pdfViewer.refresh(); // Ask pdf viewer to load/refresh pdf
    });
  }
  private downloadFile(url: string): any {
    return this.http.get(url, { responseType: "blob" }).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
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
    alert(`Page: ${currentPage}` + allText);
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
