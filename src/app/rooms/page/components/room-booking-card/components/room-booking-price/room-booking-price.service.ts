import { Injectable } from '@angular/core';

import { BookingDetails, BookingField, BookingPrice } from '@app/booking/common';
import { RoomExtended } from '@app/rooms/manager';

export interface RoomBookingCalc {
  bookingDetails: BookingDetails;
  roomExtended: RoomExtended;
}

@Injectable()
export class RoomBookingPriceService {
  calculate(payload: RoomBookingCalc): BookingPrice {
    const days = Math.floor(
      (Date.parse(payload.bookingDetails[BookingField.Period][BookingField.PeriodEnd]) -
        Date.parse(payload.bookingDetails[BookingField.Period][BookingField.PeriodStart])) /
        86400000
    );
    const rent = days * payload.roomExtended.price;
    const fee = rent * 0.15;
    const cleaning = rent * 0.01;
    const total = rent + fee + cleaning;

    return {
      days,
      rent,
      fee,
      cleaning,
      total,
    };
  }
}
