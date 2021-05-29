import { TestBed } from '@angular/core/testing';

import { AdminBuildingCreateDialogModule } from './admin-building-create-dialog.module';

describe('AdminBuildingCreateDialogModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingCreateDialogModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingCreateDialogModule).toBeTruthy();
  });
});
