import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AlertButtonComponent } from "./alert-button.component";

describe("AlertButtonComponent", () => {
  let component: AlertButtonComponent;
  // test environment for the component
  let fixture: ComponentFixture<AlertButtonComponent>;

  // this runs before each spec
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent]
    }).compileComponents(); // compiles template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a message with `warn`", () => {
    // expect(component.content).toBe("warn"); // this will fail
    expect(component.content).toContain("warn");
  });

  it("should have a severity greater than 2", () => {
    // expect(component.content).toBe("warn"); // this will fail
    expect(component.severity).toBeGreaterThan(2);
  });

  // test DOM render
  it("should have an H1 tag of `Alert Button`", () => {
    const compiled = fixture.debugElement.nativeElement;
    let textContent = compiled.querySelector("h1").textContent;
    expect(textContent).toBe("Alert Button");
  });

  it("should toggle the message boolean", () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });
});
