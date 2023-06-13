import { TestBed } from '@angular/core/testing';

import { NewoneService } from './newone.service';

describe('NewoneService', () => {
  let service: NewoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
