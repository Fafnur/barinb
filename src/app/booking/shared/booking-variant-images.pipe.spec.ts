import { BOOKING_VARIANT_STUB } from '@app/booking/state';

import { BookingVariantImagesPipe } from './booking-variant-images.pipe';

describe('BookingVariantImagesPipe', () => {
  let pipe: BookingVariantImagesPipe;

  beforeEach(() => {
    pipe = new BookingVariantImagesPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return photos', () => {
    expect(pipe.transform(BOOKING_VARIANT_STUB).length).toBe(BOOKING_VARIANT_STUB.firstRoom?.photos.length);
  });

  it('should return empty array', () => {
    expect(pipe.transform({ firstRoom: { photos: [] } } as any).length).toBe(0);
  });
});
