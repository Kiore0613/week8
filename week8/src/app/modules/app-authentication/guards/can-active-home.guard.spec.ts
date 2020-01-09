import { TestBed, async, inject } from '@angular/core/testing';

import { CanActiveHomeGuard } from './can-active-home.guard';

describe('CanActiveHomeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiveHomeGuard]
    });
  });

  it('should ...', inject([CanActiveHomeGuard], (guard: CanActiveHomeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
