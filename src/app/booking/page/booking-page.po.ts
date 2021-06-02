import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

import { BookingPageComponent } from './booking-page.component';

enum BookingPageAutomation {
  BookingViewToggle = 'booking-view-toggle',
  BookingMapMobile = 'booking-map-mobile',
  BookingListMobile = 'booking-list-mobile',
  BookingMapDesktop = 'booking-map-desktop',
  BookingListDesktop = 'booking-list-desktop',
}

export class BookingPageComponentPo extends PageObject<BookingPageComponent> {
  get bookingViewToggleText(): string | null {
    return this.text(BookingPageAutomation.BookingViewToggle);
  }

  get bookingMapMobile(): DebugElement | null {
    return this.getByAutomationId(BookingPageAutomation.BookingMapMobile);
  }

  get bookingListMobile(): DebugElement | null {
    return this.getByAutomationId(BookingPageAutomation.BookingListMobile);
  }

  get bookingMapDesktop(): DebugElement | null {
    return this.getByAutomationId(BookingPageAutomation.BookingMapDesktop);
  }

  get bookingListDesktop(): DebugElement | null {
    return this.getByAutomationId(BookingPageAutomation.BookingListDesktop);
  }

  get isMapShow(): boolean {
    return this.fixture.componentInstance.isMapShow;
  }

  triggerBookingViewToggle(): void {
    this.triggerEventHandler(BookingPageAutomation.BookingViewToggle, 'click');
  }
}
