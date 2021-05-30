import { TestBed } from '@angular/core/testing';

import { AdminPersonBuildingsModule } from './admin-person-buildings.module';

describe('AdminPersonBuildingsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPersonBuildingsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminPersonBuildingsModule).toBeTruthy();
  });
});
