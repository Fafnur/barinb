import { TestBed } from '@angular/core/testing';

import { AdminBuildingClearDialogModule } from './admin-building-clear-dialog.module';

describe('AdminBuildingClearDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingClearDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingClearDialogModule).toBeTruthy();
  });
});
