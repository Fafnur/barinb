import { DebugElement } from '@angular/core';

import { PageObject } from '@app/core/testing';

enum BookingPortletAutomation {
  BookingPortletCarousel = 'booking-portlet-carousel',
  BookingPortletTitle = 'booking-portlet-title',
  BookingPortletPrice = 'booking-portlet-price',
  BookingPortletAddress = 'booking-portlet-address',
  BookingPortletAction = 'booking-portlet-action',
}

export class BookingPortletComponentPo<T> extends PageObject<T> {
  get bookingPortletCarousel(): DebugElement | null {
    return this.getByAutomationId(BookingPortletAutomation.BookingPortletCarousel) ?? null;
  }

  get bookingPortletAddressText(): string | null {
    return this.text(BookingPortletAutomation.BookingPortletAddress);
  }

  get bookingPortletPriceText(): string | null {
    return this.text(BookingPortletAutomation.BookingPortletPrice);
  }

  get bookingPortletPriceTitle(): string | null {
    return this.text(BookingPortletAutomation.BookingPortletTitle);
  }

  get bookingPortletAction(): string | null {
    return this.text(BookingPortletAutomation.BookingPortletAction);
  }

  get bookingPortletActionHref(): string | null {
    return this.getByAutomationId(BookingPortletAutomation.BookingPortletAction)?.properties['href'] ?? null;
  }

  triggerBookingPortletActionClick(): void {
    this.triggerEventHandler(this.bookingPortletAction, 'click');
  }

  triggerBookingPortletCarouselSelected(): void {
    this.triggerEventHandler(this.bookingPortletCarousel, 'selected');
  }
}
