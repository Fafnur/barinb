import { TestBed } from '@angular/core/testing';

import { RoomBookingCardModule } from './room-booking-card.module';

describe('RoomBookingCardModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomBookingCardModule],
    }).compileComponents();
  });

  it('should create', () => {
    expect(RoomBookingCardModule).toBeTruthy();
  });
});
