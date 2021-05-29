import { TestBed } from '@angular/core/testing';

import { AdminBuildingRoomsModule } from './admin-building-rooms.module';

describe('AdminBuildingRoomsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBuildingRoomsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminBuildingRoomsModule).toBeTruthy();
  });
});
