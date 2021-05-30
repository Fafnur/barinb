import { TestBed } from '@angular/core/testing';

import { AdminPersonRemoveDialogModule } from './admin-person-remove-dialog.module';

describe('AdminPersonRemoveDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonRemoveDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonRemoveDialogModule).toBeTruthy();
  });
});
