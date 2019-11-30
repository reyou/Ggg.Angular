import { Component, ViewChild } from "@angular/core";
import { UploadService } from "./upload.service";
import { forkJoin, Observable, of, Subject } from "rxjs";
import { FileUploadProgressSet } from "./FileUploadProgressSet";
import { FileUploadProgress } from "./FileUploadProgress";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "file-upload-two";
  @ViewChild("file", {
    static: false
  })
  file;
  uploading = false;

  showCancelButton = true;
  uploadSuccessful = false;
  progressSet: FileUploadProgressSet;
  public files: Set<File> = new Set();
  constructor(public uploadService: UploadService) {}
  onFilesAdded() {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }
  addFiles() {
    this.file.nativeElement.click();
  }

  upload() {
    if (this.files.size === 0) {
      // TODO: fix this
      alert("No files selected!");
      return;
    }

    // set the component state to "uploading"

    // start the upload and save the progress map
    this.progressSet = this.uploadService.upload(this.files);

    // convert the progress map into an array
    let allProgressObservables: Array<Observable<FileUploadProgress>> = [];
    for (let key in this.progressSet) {
      allProgressObservables.push(this.progressSet[key].progress);
    }

    // Adjust the state variables

    // Hide the cancel-button
    this.showCancelButton = false;

    forkJoin(allProgressObservables).subscribe({
      next: next => this.next(next),
      error: error => this.error(error)
    });
  }
  error(error: any): void {
    debugger;
  }
  next(next: FileUploadProgress[]): void {
    // ... the upload was successful...
    this.uploadSuccessful = true;

    // ... and the component is no longer uploading
    this.uploading = false;
  }
  formatBytes(bytes) {
    let marker = 1024; // Change to 1000 if required
    let decimal = 3; // Change as required
    let kiloBytes = marker; // One Kilobyte is 1024 bytes
    let megaBytes = marker * marker; // One MB is 1024 KB
    let gigaBytes = marker * marker * marker; // One GB is 1024 MB
    let teraBytes = marker * marker * marker * marker; // One TB is 1024 GB

    // return bytes if less than a KB
    if (bytes < kiloBytes) {
      return bytes + " Bytes";
    }
    // return KB if less than a MB
    else if (bytes < megaBytes) {
      return (bytes / kiloBytes).toFixed(decimal) + " KB";
    }
    // return MB if less than a GB
    else if (bytes < gigaBytes) {
      return (bytes / megaBytes).toFixed(decimal) + " MB";
    }
    // return GB if less than a TB
    else if (bytes < teraBytes) {
      return (bytes / gigaBytes).toFixed(decimal) + " GB";
    } else {
      return (bytes / teraBytes).toFixed(decimal) + " TB";
    }
  }
  getProgress(key: string): Observable<FileUploadProgress> {
    if (this.progressSet) {
      let fileUploadProgress: Observable<FileUploadProgress> = this.progressSet[
        key
      ].progress;
      return fileUploadProgress;
    } else {
      let fileUploadProgress = new FileUploadProgress();
      fileUploadProgress.percentDone = 0;
      return of(fileUploadProgress);
    }
  }
}
