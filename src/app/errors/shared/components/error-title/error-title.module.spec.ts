import { TestBed } from '@angular/core/testing';

import { ErrorTitleModule } from './error-title.module';

describe('ErrorTitleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorTitleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorTitleModule).toBeTruthy();
  });
});
