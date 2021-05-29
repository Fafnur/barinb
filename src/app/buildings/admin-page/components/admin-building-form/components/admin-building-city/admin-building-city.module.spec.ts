import { TestBed } from '@angular/core/testing';

import { AdminBuildingCityModule } from './admin-building-city.module';

describe('AdminBuildingCityModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingCityModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingCityModule).toBeTruthy();
  });
});
