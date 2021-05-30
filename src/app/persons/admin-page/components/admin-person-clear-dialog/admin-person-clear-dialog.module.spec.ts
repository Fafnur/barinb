import { TestBed } from '@angular/core/testing';

import { AdminPersonClearDialogModule } from './admin-person-clear-dialog.module';

describe('AdminPersonClearDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonClearDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonClearDialogModule).toBeTruthy();
  });
});
