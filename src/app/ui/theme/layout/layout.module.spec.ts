import { TestBed } from '@angular/core/testing';

import { LayoutModule } from './layout.module';

describe('LayoutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(LayoutModule).toBeTruthy();
  });
});
