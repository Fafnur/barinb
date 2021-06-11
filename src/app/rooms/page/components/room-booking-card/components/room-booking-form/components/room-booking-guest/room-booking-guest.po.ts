import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-booking-guest.component.spec';

enum RoomBookingGuestsAutomation {
  RoomBookingGuestsLabel = 'room-booking-guests-label',
  RoomBookingGuestsValue = 'room-booking-guests-value',
}

export class RoomBookingGuestsComponentPo extends PageObject<WrapperComponent> {
  get roomBookingGuestsLabelText(): string | null {
    return this.text(RoomBookingGuestsAutomation.RoomBookingGuestsLabel);
  }

  get roomBookingGuestsValue(): DebugElement | null {
    return this.getByAutomationId(RoomBookingGuestsAutomation.RoomBookingGuestsValue);
  }
}
