import { TestBed } from '@angular/core/testing';

import { AdminBuildingActionsModule } from './admin-building-actions.module';

describe('AdminBuildingActionsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingActionsModule).toBeTruthy();
  });
});
