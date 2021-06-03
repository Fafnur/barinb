import { createStore } from '@app/core/store/utils';

import { BOOKING_FEATURE_KEY, bookingInitialState, BookingPartialState, BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';
import { BOOKING_DETAILS_STUB, BOOKING_VARIANT_STUB } from './booking.stub';

describe('Booking Selectors', () => {
  const getState = (payload: Partial<BookingState>): BookingPartialState => createStore(BOOKING_FEATURE_KEY, bookingInitialState, payload);

  it('selectBookingVariant() should return bookingVariant', () => {
    const state = getState({ bookingVariant: BOOKING_VARIANT_STUB });
    const results = BookingSelectors.selectBookingVariant(state);

    expect(results).toEqual(BOOKING_VARIANT_STUB);
  });

  it('selectBookingDetails() should return bookingDetails', () => {
    const state = getState({ bookingDetails: BOOKING_DETAILS_STUB });
    const results = BookingSelectors.selectBookingDetails(state);

    expect(results).toEqual(BOOKING_DETAILS_STUB);
  });
});
