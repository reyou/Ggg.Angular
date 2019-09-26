import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from "@angular/core/testing";

import { AlertButtonComponent } from "./alert-button.component";
import { of } from "rxjs";
import { MessageService } from "../message.service";

describe("AlertButtonComponent", () => {
  let component: AlertButtonComponent;
  // test environment for the component
  let fixture: ComponentFixture<AlertButtonComponent>;

  let serviceStub: any;

  // this runs before each spec
  beforeEach(async(() => {
    serviceStub = {
      getContent: () => of("You have been warned stub!")
    };

    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
      providers: [{ provide: MessageService, useValue: serviceStub }]
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

  // Async
  it("should toggle the message boolean asynchronously", fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggleAsync();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));

  it("should have a message content defined from an observable", () => {
    component.content.subscribe(content => {
      expect(content).toBeDefined();
      expect(content).toBe("You have been warned stub!");
    });
  });
});
