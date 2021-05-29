import { TestBed } from '@angular/core/testing';

import { AdminBuildingsActionsModule } from './admin-buildings-actions.module';

describe('AdminBuildingsActionsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingsActionsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingsActionsModule).toBeTruthy();
  });
});
