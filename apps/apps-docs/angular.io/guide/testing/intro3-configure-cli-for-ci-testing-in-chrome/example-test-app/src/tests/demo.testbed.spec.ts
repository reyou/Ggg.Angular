import { ValueService } from "./ValueService";
import { TestBed } from "@angular/core/testing";

let service: ValueService;

describe("TestBed Demo", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.get(ValueService);
  });

  it("should use ValueService", () => {
    expect(service.getValue()).toBe("real value");
  });
});
