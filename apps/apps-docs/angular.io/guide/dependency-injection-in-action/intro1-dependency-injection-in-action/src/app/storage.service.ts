import { Inject, Injectable, InjectionToken } from "@angular/core";
class MemoryStorage implements Storage {
  [name: string]: any;
  length: number;
  getItem(key: string): string {
    throw new Error("Method not implemented.");
  }
  key(index: number): string {
    throw new Error("Method not implemented.");
  }
  removeItem(key: string): void {
    throw new Error("Method not implemented.");
  }
  setItem(key: string, value: string): void {
    throw new Error("Method not implemented.");
  }

  clear(): void {
    throw new Error("Method not implemented.");
  }
}
export const BROWSER_STORAGE = new InjectionToken<Storage>("Browser Storage", {
  providedIn: "root",
  factory: () => localStorage
});
export const MEMORY_STORAGE = new InjectionToken<Storage>("Memory Storage", {
  providedIn: "root",
  factory: () => new MemoryStorage()
});

@Injectable({
  providedIn: "root"
})
export class BrowserStorageService {
  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}

  get(key: string) {
    this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  remove(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
