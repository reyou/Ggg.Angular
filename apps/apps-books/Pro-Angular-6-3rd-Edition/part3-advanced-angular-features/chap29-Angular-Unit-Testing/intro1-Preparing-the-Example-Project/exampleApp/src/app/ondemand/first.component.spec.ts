import { TestBed, ComponentFixture, async, fakeAsync, tick } from '@angular/core/testing';
import { FirstComponent } from './first.component';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';

@Injectable()
class MockDataSource {
  public data = [
    new Product(1, 'test1', 'Soccer', 100),
    new Product(2, 'test2', 'Chess', 100),
    new Product(3, 'test3', 'Soccer', 100)
  ];
  getData(): Observable<Product[]> {
    return new Observable<Product[]>(obs => {
      setTimeout(() => obs.next(this.data), 1000);
    });
  }
}
describe('FirstComponent', () => {
  let fixture: ComponentFixture<FirstComponent>;
  let component: FirstComponent;
  let dataSource = new MockDataSource();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FirstComponent],
      providers: [
        {
          provide: RestDataSource,
          useValue: dataSource
        }
      ]
    });

    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(FirstComponent);
      component = fixture.componentInstance;
    });
  }));

  it('performs async op', fakeAsync(() => {
    dataSource.data.push(new Product(100, 'test100', 'Soccer', 100));
    fixture.detectChanges();
    for (let i = 0; i < 1001; i++) {
      tick(1);
    }
    fixture.whenStable().then(() => {
      expect(component.getProducts().length).toBe(3);
    });
  }));
});
