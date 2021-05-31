import { PageObject } from '@app/core/testing';

export enum BookingPageAutomation {
  BookingViewToggle = 'booking-view-toggle',
}

export class BookingPageComponentPo<T> extends PageObject<T> {
  get bookingViewToggleText(): string | null {
    return this.text(BookingPageAutomation.BookingViewToggle);
  }

  triggerBookingViewToggle(): void {
    this.triggerEventHandler(BookingPageAutomation.BookingViewToggle, 'click');
  }
}
