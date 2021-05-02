import { Pipe, PipeTransform } from '@angular/core';

import { BookingVariant } from '@app/booking/common';

@Pipe({
  name: 'bookingVariantFirstImage',
})
export class BookingVariantFirstImagePipe implements PipeTransform {
  transform(bookingVariant: BookingVariant): string | null {
    return bookingVariant.firstRoom?.photos?.length ? bookingVariant.firstRoom?.photos[0] : null;
  }
}
