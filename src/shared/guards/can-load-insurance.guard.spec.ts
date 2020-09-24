import { TestBed } from '@angular/core/testing';

import { CanLoadInsuranceGuard } from './can-load-insurance.guard';

describe('CanLoadInsuranceGuard', () => {
  let guard: CanLoadInsuranceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanLoadInsuranceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
