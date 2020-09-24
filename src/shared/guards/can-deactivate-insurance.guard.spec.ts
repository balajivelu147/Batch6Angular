import { TestBed } from '@angular/core/testing';

import { CanDeactivateInsuranceGuard } from './can-deactivate-insurance.guard';

describe('CanDeactivateInsuranceGuard', () => {
  let guard: CanDeactivateInsuranceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanDeactivateInsuranceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
