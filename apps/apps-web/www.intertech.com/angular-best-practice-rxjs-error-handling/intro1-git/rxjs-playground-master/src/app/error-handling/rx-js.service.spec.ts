import { TestBed } from '@angular/core/testing';

import { RxJsService } from './rx-js.service';

describe('RxJsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RxJsService = TestBed.get(RxJsService);
    expect(service).toBeTruthy();
  });
});
