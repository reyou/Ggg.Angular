import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";
import { Subject, Observable } from "rxjs";
import { FileUploadProgressSet } from "./FileUploadProgressSet";
import { FileUploadProgress } from "./FileUploadProgress";
import { FileUploadError } from "./FileUploadError";
import { FileUploadProgressStatus } from "./FileUploadProgressStatus";

// const url = "http://localhost:8000/upload";
const url = "https://localhost:44318/upload";

@Injectable()
export class UploadService {
  FileUploadProgressStatusType = FileUploadProgressStatus;
  constructor(private http: HttpClient) {}

  public upload(files: Set<File>): FileUploadProgressSet {
    // this will be the our resulting map
    const progressSet: FileUploadProgressSet = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append("file", file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const httpRequest = new HttpRequest("POST", url, formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      // https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
      const progressSubject: Subject<FileUploadProgress> = new Subject<
        FileUploadProgress
      >();

      // send the http-request and subscribe for progress-updates
      this.http.request(httpRequest).subscribe({
        next: (httpEvent: HttpEvent<any>) =>
          this.next(httpEvent, progressSubject),
        error: (httpErrorResponse: HttpErrorResponse) =>
          this.error(httpErrorResponse, progressSubject)
      });

      // Save every progress-observable in a map of all observables
      progressSet[file.name] = {
        progress: progressSubject.asObservable()
      };
    });

    // return the map of progress.observables
    return progressSet;
  }
  next(
    httpEvent: HttpEvent<any>,
    progressSubject: Subject<FileUploadProgress>
  ): void {
    let fileUploadProgress = new FileUploadProgress();
    if (httpEvent.type === HttpEventType.UploadProgress) {
      const percentDone = Math.round(
        (100 * httpEvent.loaded) / httpEvent.total
      );
      fileUploadProgress.percentDone = percentDone;
      debugger;
      progressSubject.next(fileUploadProgress);
    } else if (httpEvent instanceof HttpResponse) {
      // Close the progress-stream if we get an answer form the API
      // The upload is complete
      fileUploadProgress.progressStatus = this.FileUploadProgressStatusType.Uploading;
      fileUploadProgress.percentDone = 100;
      debugger;
      progressSubject.next(fileUploadProgress);
      progressSubject.complete();
    }
  }
  error(
    httpErrorResponse: HttpErrorResponse,
    progressSubject: Subject<FileUploadProgress>
  ): void {
    let name: string = httpErrorResponse.name;
    let message: string = httpErrorResponse.message;
    let statusText: string = httpErrorResponse.statusText;
    let url: string = httpErrorResponse.url;
    let fileUploadProgress = new FileUploadProgress();
    fileUploadProgress.progressStatus = this.FileUploadProgressStatusType.Error;
    fileUploadProgress.error = new FileUploadError();
    fileUploadProgress.error.name = name;
    fileUploadProgress.error.message = message;
    fileUploadProgress.error.statusText = statusText;
    fileUploadProgress.error.url = url;
    progressSubject.next(fileUploadProgress);
    progressSubject.complete();
  }
}
