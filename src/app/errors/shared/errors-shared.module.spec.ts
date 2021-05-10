import { TestBed } from '@angular/core/testing';

import { ErrorsSharedModule } from './errors-shared.module';

describe('ErrorsSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorsSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(ErrorsSharedModule).toBeTruthy();
  });
});
