import { createStore } from '@app/core/store/utils';

import { BOOKING_FEATURE_KEY, bookingInitialState, BookingPartialState, BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';
import { ROOM_STUB } from './booking.stub';

describe('Booking Selectors', () => {
  const getState = (payload: Partial<BookingState>): BookingPartialState => createStore(BOOKING_FEATURE_KEY, bookingInitialState, payload);

  it('selectRoom() should return room', () => {
    const state = getState({ room: ROOM_STUB });
    const results = BookingSelectors.selectRoom(state);

    expect(results).toEqual(ROOM_STUB);
  });
});
