import { TestBed } from '@angular/core/testing';

import { AdminBuildingEditDialogModule } from './admin-building-edit-dialog.module';

describe('AdminBuildingEditDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingEditDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingEditDialogModule).toBeTruthy();
  });
});
