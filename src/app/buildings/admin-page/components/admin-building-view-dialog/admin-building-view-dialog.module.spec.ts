import { TestBed } from '@angular/core/testing';

import { AdminBuildingViewDialogModule } from './admin-building-view-dialog.module';

describe('AdminBuildingViewDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingViewDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingViewDialogModule).toBeTruthy();
  });
});
