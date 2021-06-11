import { PageObject } from '@app/core/testing';

import { RoomBookingDialogComponent } from './room-booking-dialog.component';

enum RoomBookingDialogAutomation {
  RoomBookingTitle = 'room-booking-title',
  RoomBookingContent = 'room-booking-content',
  RoomBookingClose = 'room-booking-close',
}

export class RoomBookingDialogComponentPo extends PageObject<RoomBookingDialogComponent> {
  get roomBookingTitleText(): string | null {
    return this.text(RoomBookingDialogAutomation.RoomBookingTitle);
  }

  get roomBookingContentText(): string | null {
    return this.text(RoomBookingDialogAutomation.RoomBookingContent);
  }

  get roomBookingCloseText(): string | null {
    return this.text(RoomBookingDialogAutomation.RoomBookingClose);
  }
}
