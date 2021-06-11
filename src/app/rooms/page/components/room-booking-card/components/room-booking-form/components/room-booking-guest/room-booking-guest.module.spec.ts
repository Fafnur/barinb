import { TestBed } from '@angular/core/testing';

import { RoomBookingGuestModule } from './room-booking-guest.module';

describe('RoomBookingGuestModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingGuestModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingGuestModule).toBeTruthy();
  });
});
