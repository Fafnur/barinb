import { TestBed } from '@angular/core/testing';

import { ErrorApplicationModule } from './error-application.module';

describe('ErrorApplicationModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorApplicationModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorApplicationModule).toBeTruthy();
  });
});
