import { Observable } from "rxjs";
import { FileUploadProgress } from "./FileUploadProgress";
export class FileUploadProgressSet {
  [key: string]: {
    progress: Observable<FileUploadProgress>;
  };
}
