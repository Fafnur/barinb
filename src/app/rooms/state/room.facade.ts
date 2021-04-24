import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';

import * as RoomActions from './room.actions';
import { RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomFacade {
  rooms$ = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  constructor(private readonly store: Store<RoomState>) {}

  loadRooms(): void {
    this.dispatch(RoomActions.loadRooms());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
