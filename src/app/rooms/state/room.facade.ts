import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Room } from '@app/rooms/common';

import * as RoomActions from './room.actions';
import { RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomFacade {
  rooms$ = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  room$ = (id: number): Observable<Room | null> => this.store.pipe(select(RoomSelectors.selectRoom, { id }));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<RoomState>) {}

  load(): void {
    this.dispatch(RoomActions.loadRooms());
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
