import { TestBed, async, inject } from '@angular/core/testing';

import { HomeGuardGuard } from './home-guard.guard';

describe('HomeGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeGuardGuard]
    });
  });

  it('should ...', inject([HomeGuardGuard], (guard: HomeGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
