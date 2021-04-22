import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as RoomActions from './room.actions';
import { RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomFacade {
  rooms$ = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  constructor(private readonly store: Store<RoomState>) {}

  loadRooms(): void {
    this.store.dispatch(RoomActions.loadRooms());
  }
}
