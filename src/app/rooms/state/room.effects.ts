import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { RoomStorage } from '@app/rooms/storage';

import * as RoomActions from './room.actions';

@Injectable()
export class RoomEffects {
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

  constructor(private readonly actions$: Actions, private readonly roomStorage: RoomStorage) {}
}
