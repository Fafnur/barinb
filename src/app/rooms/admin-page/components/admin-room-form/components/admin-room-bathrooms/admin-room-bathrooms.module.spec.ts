import { TestBed } from '@angular/core/testing';

import { AdminRoomBathroomsModule } from './admin-room-bathrooms.module';

describe('AdminRoomBathroomsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomBathroomsModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomBathroomsModule).toBeTruthy();
  });
});
