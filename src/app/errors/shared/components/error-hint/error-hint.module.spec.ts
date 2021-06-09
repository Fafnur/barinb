import { TestBed } from '@angular/core/testing';

import { ErrorHintModule } from './error-hint.module';

describe('ErrorHintModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHintModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorHintModule).toBeTruthy();
  });
});
