import { createReducer, on } from '@ngrx/store';

import { Room } from '@app/rooms/common';

import * as BookingActions from './booking.actions';

export const BOOKING_FEATURE_KEY = 'booking';

export interface BookingState {
  room: Room | null;
}

export interface BookingPartialState {
  readonly [BOOKING_FEATURE_KEY]: BookingState;
}

export const bookingInitialState: BookingState = {
  room: null,
};

export const reducer = createReducer(
  bookingInitialState,
  on(BookingActions.setRoom, (state, { payload }) => ({
    ...state,
    room: payload,
  })),
  on(BookingActions.clearRoom, (state) => ({
    ...state,
    room: null,
  }))
);
