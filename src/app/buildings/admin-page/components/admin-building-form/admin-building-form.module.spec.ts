import { TestBed } from '@angular/core/testing';

import { AdminBuildingFormModule } from './admin-building-form.module';

describe('AdminBuildingFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingFormModule).toBeTruthy();
  });
});
