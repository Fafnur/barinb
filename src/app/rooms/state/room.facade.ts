import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entity } from '@app/core/common';
import { NewRoom, RoomEntity } from '@app/rooms/common';

import * as RoomActions from './room.actions';
import { RoomState } from './room.reducer';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomFacade {
  rooms$ = this.store.pipe(select(RoomSelectors.selectRooms));

  roomsLoadError$ = this.store.pipe(select(RoomSelectors.selectRoomsLoadError));

  roomAdded$ = this.actions.pipe(
    ofType(RoomActions.addRoomSuccess),
    map((action) => action.payload)
  );

  room$ = (id: number): Observable<RoomEntity | null> => this.store.pipe(select(RoomSelectors.selectRoom({ id })));

  roomsByBuilding$ = (id: number): Observable<RoomEntity[] | null> => this.store.pipe(select(RoomSelectors.selectRoomsByBuilding({ id })));

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private readonly actions: Actions, private readonly store: Store<RoomState>) {}

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
