import { FileUploadError } from "./FileUploadError";
import { FileUploadProgressStatus } from "./FileUploadProgressStatus";

export class FileUploadProgress {
  FileUploadProgressStatusType = FileUploadProgressStatus;
  progressStatus: FileUploadProgressStatus = FileUploadProgressStatus.Default;
  error: FileUploadError;
  percentDone: number = 0;

  constructor() {}
  getStatusText() {
    switch (this.progressStatus) {
      case this.FileUploadProgressStatusType.Default:
        return "";
      case this.FileUploadProgressStatusType.Success:
        return "File has been successfully uploaded.";
      case this.FileUploadProgressStatusType.Error:
        return `Message: ${this.error.message} - Status Text: ${this.error.statusText} - Name: ${this.error.name}`;
      case this.FileUploadProgressStatusType.Uploading:
        return "File is being uploaded.";
      default:
        throw new Error(`Invalid state: ${this.progressStatus}`);
    }
  }
}
