import { TestBed } from '@angular/core/testing';

import { AppCommonModule } from './app-common.module';

describe('AppCommonModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCommonModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AppCommonModule).toBeTruthy();
  });
});
