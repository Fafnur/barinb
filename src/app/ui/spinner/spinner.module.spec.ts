import { TestBed } from '@angular/core/testing';

import { SpinnerModule } from './spinner.module';

describe('SpinnerModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(SpinnerModule).toBeTruthy();
  });
});
