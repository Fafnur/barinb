import { Injectable } from '@angular/core';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Entity } from '@app/core/common';
import { NewRoom, RoomEntity } from '@app/rooms/common';

import * as RoomActions from './room.actions';
import { RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomFacade {
  rooms$ = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  room$ = (id: number): Observable<RoomEntity | null> => this.store.pipe(select(RoomSelectors.selectRoom({ id })));

  roomsByBuilding$ = (id: number): Observable<RoomEntity[] | null> => this.store.pipe(select(RoomSelectors.selectRoomsByBuilding({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly store: Store<RoomState>) {}

  clear(): void {
    this.dispatch(RoomActions.clearRooms());
  }

  load(): void {
    this.dispatch(RoomActions.loadRooms());
  }

  removeRoom(payload: Entity): void {
    this.dispatch(RoomActions.removeRoom({ payload }));
  }

  addRoom(payload: NewRoom): void {
    this.dispatch(RoomActions.addRoom({ payload }));
  }

  private dispatch(action: Action): void {
    this.store.dispatch(action);
  }
}
