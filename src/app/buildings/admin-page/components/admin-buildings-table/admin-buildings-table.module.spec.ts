import { TestBed } from '@angular/core/testing';

import { AdminBuildingsTableModule } from './admin-buildings-table.module';

describe('AdminBuildingsTableModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingsTableModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingsTableModule).toBeTruthy();
  });
});
