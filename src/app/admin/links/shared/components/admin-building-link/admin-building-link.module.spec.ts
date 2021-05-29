import { TestBed } from '@angular/core/testing';

import { AdminBuildingLinkModule } from './admin-building-link.module';

describe('AdminBuildingLinkModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingLinkModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingLinkModule).toBeTruthy();
  });
});
