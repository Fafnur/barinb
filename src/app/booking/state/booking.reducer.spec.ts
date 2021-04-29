import { createState } from '@app/core/store/utils';

import * as BookingActions from './booking.actions';
import { bookingInitialState, BookingState, reducer } from './booking.reducer';
import { BOOKING_VARIANT_STUB } from './booking.stub';

describe('Booking Reducer', () => {
  const getState = (payload?: Partial<BookingState>): BookingState => createState(bookingInitialState, payload);

  it('setBookingVariant() should set bookingVariant', () => {
    const state = getState();
    const action = BookingActions.setBookingVariant({ payload: BOOKING_VARIANT_STUB });
    const result = reducer(state, action);

    expect(result.bookingVariant).toEqual(BOOKING_VARIANT_STUB);
  });

  it('clearBookingVariant() should clear bookingVariant', () => {
    const state = getState({ bookingVariant: BOOKING_VARIANT_STUB });
    const action = BookingActions.clearBookingVariant();
    const result = reducer(state, action);

    expect(result.bookingVariant).toBeNull();
  });
});
