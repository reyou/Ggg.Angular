import { Component } from "@angular/core";
import { DownloaderService } from "./downloader.service";

@Component({
  selector: "app-downloader",
  templateUrl: "./downloader.component.html",
  providers: [DownloaderService]
})
export class DownloaderComponent {
  contents: string;
  constructor(private downloaderService: DownloaderService) {}

  clear() {
    this.contents = undefined;
  }

  download() {
    let obs$ = this.downloaderService.getTextFile("assets/textfile.txt");
    obs$.subscribe({
      next: results => {
        this.contents = results;
      }
    });
    obs$.subscribe({
      next: results => {
        this.contents = results;
      }
    });
  }
}
