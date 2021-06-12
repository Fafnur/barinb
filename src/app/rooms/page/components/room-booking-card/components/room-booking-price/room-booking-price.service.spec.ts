import { BookingField } from '@app/booking/common';
import { BOOKING_DETAILS_STUB } from '@app/booking/state';
import { ROOM_EXTENDED_STUB } from '@app/rooms/manager';

import { RoomBookingPriceService } from './room-booking-price.service';

describe('RoomBookingPriceService', () => {
  let service: RoomBookingPriceService;

  beforeEach(() => {
    service = new RoomBookingPriceService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should calc for 1 day with minimal', () => {
    expect(service.calculate({ roomExtended: { price: 1 } as any, bookingDetails: BOOKING_DETAILS_STUB })).toEqual({
      cleaning: 0.01,
      days: 1,
      fee: 0.15,
      rent: 1,
      total: 1.16,
    });
  });

  it('should calc for 1 day normal', () => {
    expect(service.calculate({ roomExtended: ROOM_EXTENDED_STUB, bookingDetails: BOOKING_DETAILS_STUB })).toEqual({
      cleaning: 25,
      days: 1,
      fee: 375,
      rent: 2500,
      total: 2900,
    });
  });

  it('should calc for 6 days', () => {
    const bookingDetails = {
      [BookingField.Period]: {
        [BookingField.PeriodStart]: '2021-01-01',
        [BookingField.PeriodEnd]: '2021-01-07',
      },
      [BookingField.Guests]: 1,
    };

    const roomExtended = { price: 1000 } as any;

    expect(service.calculate({ roomExtended, bookingDetails })).toEqual({
      cleaning: 60,
      days: 6,
      fee: 900,
      rent: 6000,
      total: 6960,
    });
  });
});
