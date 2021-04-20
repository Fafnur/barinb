import { TestBed } from '@angular/core/testing';

import { AppLocaleModule } from './app-locale.module';

describe('AppLocaleModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppLocaleModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AppLocaleModule).toBeTruthy();
  });
});
