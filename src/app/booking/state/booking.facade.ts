import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { BookingVariant } from '@app/booking/common';

import * as BookingActions from './booking.actions';
import { BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';

@Injectable()
export class BookingFacade {
  bookingVariant$ = this.store.pipe(select(BookingSelectors.selectBookingVariant));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<BookingState>) {}

  setBookingVariant(payload: BookingVariant): void {
    this.dispatch(BookingActions.setBookingVariant({ payload }));
  }

  clearBookingVariant(): void {
    this.dispatch(BookingActions.clearBookingVariant());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
