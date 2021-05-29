import { TestBed } from '@angular/core/testing';

import { AdminBuildingAddressModule } from './admin-building-address.module';

describe('AdminBuildingAddressModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingAddressModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingAddressModule).toBeTruthy();
  });
});
