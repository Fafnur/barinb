import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { RoomEntity } from '@app/rooms/common';

import * as RoomActions from './room.actions';

export const ROOM_FEATURE_KEY = 'rooms';

export interface RoomState extends EntityState<RoomEntity> {
  roomsLoadError: Record<string, any> | null;
  roomsLoadRun: boolean;

  roomCreateError: Record<string, any> | null;
  roomCreateRun: boolean;

  roomsRemoveError: (Record<string, any> & { rooms: number[] }) | null;
  roomsRemoveRun: boolean;
}

export interface RoomPartialState {
  readonly [ROOM_FEATURE_KEY]: RoomState;
}

export const roomAdapter: EntityAdapter<RoomEntity> = createEntityAdapter<RoomEntity>();

export const roomInitialState: RoomState = roomAdapter.getInitialState({
  roomsLoadError: null,
  roomsLoadRun: false,
  roomCreateError: null,
  roomCreateRun: false,
  roomsRemoveError: null,
  roomsRemoveRun: false,
});

export const reducer = createReducer(
  roomInitialState,
  on(RoomActions.loadRooms, (state) => ({
    ...state,
    roomsLoadError: null,
    roomsLoadRun: true,
  })),
  on(RoomActions.loadRoomsSuccess, (state, { payload }) =>
    roomAdapter.setAll(payload, {
      ...state,
      roomsLoadRun: false,
    })
  ),
  on(RoomActions.loadRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsLoadError: payload,
    roomsLoadRun: false,
  })),
  on(RoomActions.clearRooms, (state) =>
    roomAdapter.removeAll({
      ...state,
    })
  ),
  on(RoomActions.removeRoom, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          roomRemoveRun: true,
        },
      },
      state
    )
  ),
  on(RoomActions.removeRoomSuccess, (state, { payload }) => roomAdapter.removeOne(payload.id, state)),
  on(RoomActions.removeRoomFailure, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          roomRemoveError: payload,
          roomRemoveRun: false,
        },
      },
      state
    )
  ),
  on(RoomActions.addRoom, (state) => ({
    ...state,
    roomCreateError: null,
    roomCreateRun: true,
  })),
  on(RoomActions.addRoomSuccess, (state, { payload }) =>
    roomAdapter.addOne(payload, {
      ...state,
      roomCreateRun: false,
    })
  ),
  on(RoomActions.addRoomFailure, (state, { payload }) => ({
    ...state,
    roomCreateError: payload,
    roomCreateRun: false,
  })),
  on(RoomActions.changeRoom, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          roomChangeRun: true,
        },
      },
      state
    )
  ),
  on(RoomActions.changeRoomSuccess, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          ...payload,
          updated: new Date().toISOString(),
          roomChangeRun: false,
        },
      },
      state
    )
  ),
  on(RoomActions.changeRoomFailure, (state, { payload }) =>
    roomAdapter.updateOne(
      {
        id: payload.id,
        changes: {
          roomChangeError: payload,
          roomChangeRun: false,
        },
      },
      state
    )
  ),
  on(RoomActions.removeRooms, (state) => ({
    ...state,
    roomsRemoveError: null,
    roomsRemoveRun: true,
  })),
  on(RoomActions.removeRoomsSuccess, (state, { payload }) =>
    roomAdapter.removeMany(payload, {
      ...state,
      roomsRemoveRun: false,
    })
  ),
  on(RoomActions.removeRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsRemoveError: payload,
    roomsRemoveRun: false,
  }))
);
