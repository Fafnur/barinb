import { TestBed } from '@angular/core/testing';

import { BuildingSharedModule } from './building-shared.module';

describe('BuildingSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingSharedModule).toBeTruthy();
  });
});
