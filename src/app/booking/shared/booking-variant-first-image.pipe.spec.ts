import { BOOKING_VARIANT_STUB } from '@app/booking/state';

import { BookingVariantFirstImagePipe } from './booking-variant-first-image.pipe';

describe('BookingVariantFirstImagePipe', () => {
  let pipe: BookingVariantFirstImagePipe;

  beforeEach(() => {
    pipe = new BookingVariantFirstImagePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return first image', () => {
    expect(pipe.transform(BOOKING_VARIANT_STUB)).toBe(BOOKING_VARIANT_STUB.firstRoom?.photos[0]);
  });

  it('should return null for empty photos', () => {
    expect(pipe.transform({ firstRoom: { photos: [] } } as any)).toBeNull();
  });
});
