import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import { Room } from '@app/rooms/common';

import * as BookingActions from './booking.actions';
import { BookingState } from './booking.reducer';
import * as BookingSelectors from './booking.selectors';

@Injectable()
export class BookingFacade {
  room$ = this.store.pipe(select(BookingSelectors.selectRoom));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<BookingState>) {}

  setRoom(payload: Room): void {
    this.dispatch(BookingActions.setRoom({ payload }));
  }

  clearRoom(): void {
    this.dispatch(BookingActions.clearRoom());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
