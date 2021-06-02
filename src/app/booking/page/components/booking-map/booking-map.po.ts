import { DebugElement } from '@angular/core';

import { BookingVariant } from '@app/booking/common';
import { PageObject } from '@app/core/testing';
import { MapMarkerConfig } from '@app/maps/common';

import { BookingMapComponent } from './booking-map.component';

enum BookingMapAutomation {
  BookingMapGoogle = 'booking-map-google',
}

export class BookingMapComponentPo extends PageObject<BookingMapComponent> {
  get bookingMapGoogle(): DebugElement | null {
    return this.getByAutomationId(BookingMapAutomation.BookingMapGoogle) ?? null;
  }

  triggerBookingMapGoogleClicked(result: MapMarkerConfig<BookingVariant>): void {
    this.triggerEventHandler(this.bookingMapGoogle, 'mapMarkerClicked', result);
  }

  triggerBookingMapGoogleInfoWindowClosed(): void {
    this.triggerEventHandler(this.bookingMapGoogle, 'mapInfoWindowClosed');
  }
}
