import { TestBed } from '@angular/core/testing';

import { RoomBookingFormModule } from './room-booking-form.module';

describe('RoomBookingFormModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingFormModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingFormModule).toBeTruthy();
  });
});
