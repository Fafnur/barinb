import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { WrapperComponent } from './room-booking-date.component.spec';

enum RoomBookingDateAutomation {
  RoomBookingDateLabel = 'room-booking-date-label',
  RoomBookingDateRange = 'room-booking-date-range',
  RoomBookingDateStart = 'room-booking-date-start',
  RoomBookingDateEnd = 'room-booking-date-end',
  RoomBookingDatepickerToggle = 'room-booking-datepicker-toggle',
  RoomBookingRangePicker = 'room-booking-range-picker',
}

export class RoomBookingDateComponentPo extends PageObject<WrapperComponent> {
  get roomBookingDateLabelText(): string | null {
    return this.text(RoomBookingDateAutomation.RoomBookingDateLabel);
  }

  get roomBookingDateRange(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingDateRange);
  }

  get roomBookingDateStart(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingDateStart);
  }

  get roomBookingDateEnd(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingDateEnd);
  }

  get roomBookingDatepickerToggle(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingDatepickerToggle);
  }

  get roomBookingRangePicker(): DebugElement | null {
    return this.getByAutomationId(RoomBookingDateAutomation.RoomBookingRangePicker);
  }
}
