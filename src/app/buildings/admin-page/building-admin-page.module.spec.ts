import { TestBed } from '@angular/core/testing';

import { BuildingAdminPageModule } from './building-admin-page.module';

describe('BuildingAdminPageModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingAdminPageModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingAdminPageModule).toBeTruthy();
  });
});
