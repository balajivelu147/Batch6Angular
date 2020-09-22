import { TestBed } from '@angular/core/testing';

import { CanActivateInsuranceGuard } from './can-activate-insurance.guard';

describe('CanActivateInsuranceGuard', () => {
  let guard: CanActivateInsuranceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateInsuranceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
