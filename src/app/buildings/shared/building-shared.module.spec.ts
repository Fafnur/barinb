import { TestBed } from '@angular/core/testing';

import { BuildingSharedModule } from './building-shared.module';

describe('RoomSharedModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingSharedModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(BuildingSharedModule).toBeTruthy();
  });
});
