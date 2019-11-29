import { FileUploadError } from "./FileUploadError";
import { FileUploadProgressStatus } from "./FileUploadProgressStatus";

export class FileUploadProgress {
  FileUploadProgressStatusType = FileUploadProgressStatus;
  progressStatus: number = 0;
  error: FileUploadError;
  percentDone: number;
  constructor() {}
}
