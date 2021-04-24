import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { fetch } from '@app/core/store/utils';
import { RoomStorage } from '@app/rooms/storage';

import * as RoomActions from './room.actions';

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

  constructor(private readonly actions$: Actions, private readonly roomStorage: RoomStorage) {}

  ngrxOnInitEffects(): Action {
    return RoomActions.loadRooms();
  }
}
