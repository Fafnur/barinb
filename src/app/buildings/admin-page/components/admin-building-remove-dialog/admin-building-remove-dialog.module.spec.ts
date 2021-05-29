import { TestBed } from '@angular/core/testing';

import { AdminBuildingRemoveDialogModule } from './admin-building-remove-dialog.module';

describe('AdminBuildingRemoveDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingRemoveDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingRemoveDialogModule).toBeTruthy();
  });
});
