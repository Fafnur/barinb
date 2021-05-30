import { TestBed } from '@angular/core/testing';

import { AdminPersonViewDialogModule } from './admin-person-view-dialog.module';

describe('AdminPersonViewDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonViewDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonViewDialogModule).toBeTruthy();
  });
});
