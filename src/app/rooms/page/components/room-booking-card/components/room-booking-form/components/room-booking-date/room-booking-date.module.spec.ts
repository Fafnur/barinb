import { TestBed } from '@angular/core/testing';

import { RoomBookingDateModule } from './room-booking-date.module';

describe('RoomBookingDateModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingDateModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingDateModule).toBeTruthy();
  });
});
