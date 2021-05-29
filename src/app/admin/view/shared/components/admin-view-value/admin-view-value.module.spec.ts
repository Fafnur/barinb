import { TestBed } from '@angular/core/testing';

import { AdminViewValueModule } from './admin-view-value.module';

describe('AdminViewValueModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewValueModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminViewValueModule).toBeTruthy();
  });
});
