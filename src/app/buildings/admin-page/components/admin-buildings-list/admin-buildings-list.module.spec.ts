import { TestBed } from '@angular/core/testing';

import { AdminBuildingsListModule } from './admin-buildings-list.module';

describe('AdminBuildingsListModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingsListModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingsListModule).toBeTruthy();
  });
});
