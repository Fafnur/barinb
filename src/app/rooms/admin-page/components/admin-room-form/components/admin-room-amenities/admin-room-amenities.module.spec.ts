import { TestBed } from '@angular/core/testing';

import { AdminRoomAmenitiesModule } from './admin-room-amenities.module';

describe('AdminRoomAmenitiesModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminRoomAmenitiesModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(AdminRoomAmenitiesModule).toBeTruthy();
  });
});
