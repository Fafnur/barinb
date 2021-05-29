import { TestBed } from '@angular/core/testing';

import { AdminViewLabelModule } from './admin-view-label.module';

describe('AdminViewLabelModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewLabelModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminViewLabelModule).toBeTruthy();
  });
});
