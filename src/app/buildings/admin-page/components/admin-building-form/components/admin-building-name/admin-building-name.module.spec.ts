import { TestBed } from '@angular/core/testing';

import { AdminBuildingNameModule } from './admin-building-name.module';

describe('AdminBuildingNameModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingNameModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingNameModule).toBeTruthy();
  });
});
