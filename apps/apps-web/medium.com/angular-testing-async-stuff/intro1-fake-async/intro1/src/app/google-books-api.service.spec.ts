import { TestBed } from "@angular/core/testing";

import { GoogleBooksAPI } from "./google-books-api.service";

describe("GoogleBooksAPI", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: GoogleBooksAPI = TestBed.get(GoogleBooksAPI);
    expect(service).toBeTruthy();
  });
});
