import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BOOKING_FEATURE_KEY, BookingState } from './booking.reducer';

export const selectBookingState = createFeatureSelector<BookingState>(BOOKING_FEATURE_KEY);

export const selectBookingVariant = createSelector(selectBookingState, (state) => state.bookingVariant);

export const selectBookingDetails = createSelector(selectBookingState, (state) => state.bookingDetails);
