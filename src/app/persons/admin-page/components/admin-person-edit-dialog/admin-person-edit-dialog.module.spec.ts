import { TestBed } from '@angular/core/testing';

import { AdminPersonEditDialogModule } from './admin-person-edit-dialog.module';

describe('AdminPersonEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonEditDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonEditDialogModule).toBeTruthy();
  });
});
