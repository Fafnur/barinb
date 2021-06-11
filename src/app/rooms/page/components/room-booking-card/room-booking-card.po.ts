import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-booking-card.component.spec';

enum RoomBookingCardAutomation {
  RoomBookingCard = 'room-booking-card',
  RoomBookingPrice = 'room-booking-price',
  RoomBookingForm = 'room-booking-form',
  RoomBookingRoomPrice = 'room-booking-room-price',
}

export class RoomBookingCardComponentPo extends PageObject<WrapperComponent> {
  get roomBookingCard(): DebugElement | null {
    return this.getByAutomationId(RoomBookingCardAutomation.RoomBookingCard);
  }

  get roomBookingPriceText(): string | null {
    return this.text(RoomBookingCardAutomation.RoomBookingPrice);
  }

  get roomBookingForm(): DebugElement | null {
    return this.getByAutomationId(RoomBookingCardAutomation.RoomBookingForm);
  }

  get roomBookingRoomPrice(): DebugElement | null {
    return this.getByAutomationId(RoomBookingCardAutomation.RoomBookingRoomPrice);
  }
}
