import { TestBed } from '@angular/core/testing';

import { AdminBuildingLngModule } from './admin-building-lng.module';

describe('AdminBuildingLngModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingLngModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingLngModule).toBeTruthy();
  });
});
