import { BookingVariant } from '@app/booking/common';
import { PageObject } from '@app/core/testing';

import { BookingCardComponent } from './booking-card.component';

enum BookingCardAutomation {
  BookingCardCarousel = 'booking-card-carousel',
  BookingCardDescription = 'booking-card-description',
}

export class BookingCardComponentPo extends PageObject<BookingCardComponent> {
  get bookingCardDescription(): string | null {
    return this.text(BookingCardAutomation.BookingCardDescription);
  }

  triggerBookingVariantSelected(result: BookingVariant): void {
    this.triggerEventHandler(this.getByAutomationId(BookingCardAutomation.BookingCardCarousel), 'selected', result);
  }
}
