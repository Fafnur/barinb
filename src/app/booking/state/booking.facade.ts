import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { BookingDetails, BookingVariant } from '@app/booking/common';

import * as BookingActions from './booking.actions';
import { BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';

@Injectable()
export class BookingFacade {
  bookingVariant$ = this.store.pipe(select(BookingSelectors.selectBookingVariant));

  bookingDetails$ = this.store.pipe(select(BookingSelectors.selectBookingDetails));

  constructor(private readonly store: Store<BookingState>) {}

  setBookingVariant(payload: BookingVariant): void {
    this.dispatch(BookingActions.setBookingVariant({ payload }));
  }

  setBookingDetails(payload: BookingDetails): void {
    this.dispatch(BookingActions.setBookingDetails({ payload }));
  }

  clearBookingVariant(): void {
    this.dispatch(BookingActions.clearBookingVariant());
  }

  clearBookingDetails(): void {
    this.dispatch(BookingActions.clearBookingDetails());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
