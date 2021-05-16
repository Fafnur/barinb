import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { createRoomFromNewRoom } from '@app/rooms/common';
import { RoomStorage } from '@app/rooms/storage';

import * as RoomActions from './room.actions';
import * as RoomSelectors from './room.selectors';

@Injectable()
export class RoomEffects implements OnInitEffects {
  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadRooms),
      fetch({
        id: () => 'load-rooms',
        run: () => this.roomStorage.get().pipe(map((payload) => RoomActions.loadRoomsSuccess({ payload }))),
        onError: (action, payload) => RoomActions.loadRoomsFailure({ payload }),
      })
    )
  );

  removeRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.removeRoom),
      withLatestFrom(this.store.pipe(select(RoomSelectors.selectRoomsEntities))),
      fetch({
        id: (action) => `remove-room-${action.payload.id}`,
        run: (action, roomsEntities) => {
          const room = roomsEntities ? roomsEntities[action.payload.id] : null;

          return room ? RoomActions.removeRoomSuccess({ payload: action.payload }) : RoomActions.removeRoomCancel();
        },
        onError: (action, error) => RoomActions.removeRoomFailure({ payload: { ...error, id: action.payload.id } }),
      })
    )
  );

  addRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.addRoom),
      withLatestFrom(this.store.pipe(select(RoomSelectors.selectRooms))),
      fetch({
        id: () => 'add-room',
        run: (action, rooms) => RoomActions.addRoomSuccess({ payload: createRoomFromNewRoom(rooms ?? [], action.payload) }),
        onError: (action, payload) => RoomActions.addRoomFailure({ payload }),
      })
    )
  );

  constructor(private readonly actions$: Actions, private readonly store: Store, private readonly roomStorage: RoomStorage) {}

  ngrxOnInitEffects(): Action {
    return RoomActions.loadRooms();
  }
}
