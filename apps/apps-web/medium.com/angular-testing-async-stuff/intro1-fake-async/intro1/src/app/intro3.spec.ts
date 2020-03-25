import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { ApiService } from "./api.service";
import SpecUtils from "./SpecUtils";
import { ReactiveFormsModule } from "@angular/forms";
import { GoogleBooksAPI } from "./google-books-api.service";

describe("on search", () => {
  let DEBOUNCING_VALUE = 500;
  let REQUEST_DELAY = 5000;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [AppComponent],
      providers: [GoogleBooksAPI]
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    let apiService = fixture.debugElement.injector.get(GoogleBooksAPI);
    let queryResult = getResults("fake search");
    spyOn(apiService, "query").and.returnValue(
      of(queryResult).pipe(delay(1000))
    );
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
    tick(REQUEST_DELAY);
  }));
});

function getResults(q: string) {
  console.log("Test getResults is running.");
  let results = [];
  for (let i = 0; i < 10; i++) {
    results.push(`Result for ${q} - ${i}`);
  }
  return results;
}
