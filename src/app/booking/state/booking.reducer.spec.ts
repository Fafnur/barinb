import { createState } from '@app/core/store/utils';

import * as BookingActions from './booking.actions';
import { bookingInitialState, BookingState, reducer } from './booking.reducer';
import { ROOM_STUB } from './booking.stub';

describe('Booking Reducer', () => {
  const getState = (payload?: Partial<BookingState>): BookingState => createState(bookingInitialState, payload);

  it('setRoom() should set room', () => {
    const state = getState();
    const action = BookingActions.setRoom({ payload: ROOM_STUB });
    const result = reducer(state, action);

    expect(result.room).toEqual(ROOM_STUB);
  });

  it('clearRoom() should clear room', () => {
    const state = getState({ room: ROOM_STUB });
    const action = BookingActions.clearRoom();
    const result = reducer(state, action);

    expect(result.room).toBeNull();
  });
});
