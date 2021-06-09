import { TestBed } from '@angular/core/testing';

import { ErrorLogoModule } from './error-logo.module';

describe('ErrorLogoModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorLogoModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorLogoModule).toBeTruthy();
  });
});
