import { TestBed } from '@angular/core/testing';

import { AdminRoomBuildingModule } from './admin-room-building.module';

describe('AdminRoomBuildingModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomBuildingModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomBuildingModule).toBeTruthy();
  });
});
