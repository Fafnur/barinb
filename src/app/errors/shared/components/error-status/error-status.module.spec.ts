import { TestBed } from '@angular/core/testing';

import { ErrorStatusModule } from './error-status.module';

describe('ErrorHintModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorStatusModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorStatusModule).toBeTruthy();
  });
});
