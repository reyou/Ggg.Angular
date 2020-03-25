import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ApiService } from "./api.service";
import SpecUtils from "./SpecUtils";
import { ReactiveFormsModule } from "@angular/forms";
import { GoogleBooksAPI } from "./google-books-api.service";

describe("on search", () => {
  let DEBOUNCING_VALUE = 500;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [GoogleBooksAPI, ApiService]
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    let apiService = fixture.debugElement.injector.get(ApiService);
    let queryResult = {};
    spyOn(apiService, "query").and.returnValue(of(queryResult));
  });

  it("clears the previous result", fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let comp = fixture.componentInstance;
    comp.options = ["non empty"];
    SpecUtils.focusAndInput("Lon", fixture, "input");
    tick(DEBOUNCING_VALUE);
    fixture.detectChanges();
    expect(comp.options.length).toBe(0, `was [${comp.options.join(",")}]`);
  }));

  it("clears the previous result", fakeAsync(() => {}));

  it("emits the start signal", fakeAsync(() => {}));

  it("is throttling the possible hits of the API to 1 request per DEBOUNCING_VALUE milliseconds", fakeAsync(() => {}));
});

describe("on success", () => {
  it("calls the google API", fakeAsync(() => {}));
  it("emits the success signal with number of matches", fakeAsync(() => {}));
  it("shows the titles in the suggest field", fakeAsync(() => {}));
});

describe("on error", () => {
  it("emits the error signal", fakeAsync(() => {}));
});
