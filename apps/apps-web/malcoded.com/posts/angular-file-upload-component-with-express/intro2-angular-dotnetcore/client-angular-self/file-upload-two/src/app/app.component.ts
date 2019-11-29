import { Component, ViewChild } from "@angular/core";
import { UploadService } from "./upload.service";
import { forkJoin, Observable } from "rxjs";
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
}
