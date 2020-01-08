import { TestBed, async, inject } from '@angular/core/testing';

import { CanActiveAuthGuard } from './can-active-auth.guard';

describe('CanActiveAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveAuthGuard]
    });
  });

  it('should ...', inject([CanActiveAuthGuard], (guard: CanActiveAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
