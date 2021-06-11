import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-booking-form.component.spec';

enum RoomBookingFormAutomation {
  RoomBookingDate = 'room-booking-date',
  RoomBookingGuest = 'room-booking-guest',
  RoomBookingError = 'room-booking-error',
  RoomBookingSubmit = 'room-booking-submit',
}

export class RoomBookingFormComponentPo extends PageObject<WrapperComponent> {
  get roomBookingDate(): DebugElement | null {
    return this.getByAutomationId(RoomBookingFormAutomation.RoomBookingDate);
  }

  get roomBookingGuest(): DebugElement | null {
    return this.getByAutomationId(RoomBookingFormAutomation.RoomBookingGuest);
  }

  get roomBookingErrorText(): string | null {
    return this.text(RoomBookingFormAutomation.RoomBookingError);
  }

  get roomBookingSubmitText(): string | null {
    return this.text(RoomBookingFormAutomation.RoomBookingSubmit);
  }

  setForm(value: Record<string, any>): void {
    this.fixture.componentInstance.roomBookingFormComponent?.form.patchValue(value);
  }

  triggerRoomBookingSubmitClick(): void {
    this.triggerEventHandler(RoomBookingFormAutomation.RoomBookingSubmit, 'click');
  }
}
