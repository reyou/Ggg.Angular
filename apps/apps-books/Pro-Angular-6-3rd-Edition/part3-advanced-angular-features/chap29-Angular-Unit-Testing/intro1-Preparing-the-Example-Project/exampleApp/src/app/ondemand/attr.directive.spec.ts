import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PaAttrDirective } from './attr.directive';

@Component({
  template: `
    <div>
      <span [pa-attr]="className">Test Content</span>
    </div>
  `
})
class TestComponent {
  className = 'initialClass';
  @ViewChild(PaAttrDirective, { static: false })
  attrDirective: PaAttrDirective;
}
describe('PaAttrDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: PaAttrDirective;
  let spanElement: HTMLSpanElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, PaAttrDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    // https://github.com/angular/angular/issues/8332
    directive = fixture.debugElement
      .query(By.directive(PaAttrDirective))
      .injector.get(PaAttrDirective);
    spanElement = fixture.debugElement.query(By.css('span')).nativeElement;
  });

  it('generates the correct number of elements', () => {
    fixture.detectChanges();
    expect(directive.bgClass).toBe('initialClass');
    expect(spanElement.className).toBe('initialClass');
    fixture.componentInstance.className = 'nextClass';
    fixture.detectChanges();
    expect(directive.bgClass).toBe('nextClass');
    expect(spanElement.className).toBe('nextClass');
  });
});
