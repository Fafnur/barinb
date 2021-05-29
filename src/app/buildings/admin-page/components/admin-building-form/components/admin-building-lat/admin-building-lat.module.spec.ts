import { TestBed } from '@angular/core/testing';

import { AdminBuildingLatModule } from './admin-building-lat.module';

describe('AdminBuildingLatModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingLatModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingLatModule).toBeTruthy();
  });
});
