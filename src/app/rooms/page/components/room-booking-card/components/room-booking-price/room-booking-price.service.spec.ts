import { TestBed } from '@angular/core/testing';

import { RoomBookingPriceService } from './room-booking-price.service';

describe('RoomBookingPriceService', () => {
  let service: RoomBookingPriceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [RoomBookingPriceService],
    });

    service = new RoomBookingPriceService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
