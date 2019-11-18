// https://ng2-pdfjs-viewer.azurewebsites.net/events
// https://scotch.io/tutorials/building-text-to-speech-apps-for-the-web
import { Component, ViewChild, OnInit } from "@angular/core";
import { PdfJsViewerComponent } from "ng2-pdfjs-viewer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "pdfjs-viewer-example";
  totalPage = 0;
  @ViewChild("pdfViewer", { static: false })
  pdfViewer: PdfJsViewerComponent;
  speechSynthesis: SpeechSynthesis;
  pdfApp: any;
  pageNumber: number;
  constructor() {}
  public ngOnInit(): void {
    if ("speechSynthesis" in window) {
      this.speechSynthesis = window.speechSynthesis;
    }
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
    return allText;
  }
  public async speak() {
    if (this.speechSynthesis) {
      if (this.speechSynthesis.speaking) {
        return;
      }
      let text = await this.text();
      // collection of SpeechSynthesisVoice
      // https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice
      let voices: SpeechSynthesisVoice[] = this.speechSynthesis.getVoices();
      // Get the first `en` language voice in the list
      let voice = this.getFirstVoice(voices, "en");
      // Create an utterance object
      let utterance: SpeechSynthesisUtterance = new SpeechSynthesisUtterance(
        text
      );
      // Set utterance properties
      utterance.voice = voice;
      utterance.pitch = 1;
      utterance.rate = 2;
      let _self = this;
      utterance.onend = function() {
        //  _self.next();
        //  _self.speak();
      };
      // utterance.volume = 0.8;
      // Speak the utterance
      this.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech not supported.");
    }
  }
  public stop() {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
  }
  getFirstVoice(voices: SpeechSynthesisVoice[], lang: string) {
    let voice = voices.filter(function(voice) {
      return voice.lang === `${lang}`;
    })[0];
    return voice;
  }
  printVoices(voices: SpeechSynthesisVoice[]) {
    voices.forEach(function(voice) {
      console.log({
        name: voice.name,
        lang: voice.lang,
        uri: voice.voiceURI,
        local: voice.localService,
        default: voice.default
      });
    });
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
