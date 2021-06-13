import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { BookingListComponent } from './booking-list.component';

enum BookingListAutomation {
  BookingListPortlet = 'booking-list-portlet',
  BookingListEmpty = 'booking-list-empty',
}

export class BookingListComponentPo extends PageObject<BookingListComponent> {
  get bookingListPortlets(): DebugElement[] {
    return this.getAllByAutomationId(BookingListAutomation.BookingListPortlet);
  }

  get bookingListEmptyText(): string | null {
    return this.text(BookingListAutomation.BookingListEmpty);
  }
}
