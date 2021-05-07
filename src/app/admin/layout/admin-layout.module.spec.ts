import { TestBed } from '@angular/core/testing';

import { AdminLayoutModule } from './admin-layout.module';

describe('AdminLayoutModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayoutModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminLayoutModule).toBeTruthy();
  });
});
