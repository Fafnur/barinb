import { createReducer, on } from '@ngrx/store';

import { Room } from '@app/rooms/common';

import * as RoomActions from './room.actions';

export const ROOM_FEATURE_KEY = 'rooms';

export interface RoomState {
  rooms: Room[] | null;
  roomsLoadError: Record<string, any> | null;
}

export interface RoomPartialState {
  readonly [ROOM_FEATURE_KEY]: RoomState;
}

export const roomInitialState: RoomState = {
  rooms: null,
  roomsLoadError: null,
};

export const reducer = createReducer(
  roomInitialState,
  on(RoomActions.loadRooms, (state) => ({
    ...state,
    roomsLoadError: null,
  })),
  on(RoomActions.loadRoomsSuccess, (state, { payload }) => ({
    ...state,
    rooms: payload,
  })),
  on(RoomActions.loadRoomsFailure, (state, { payload }) => ({
    ...state,
    roomsLoadError: payload,
  })),
  on(RoomActions.clearRooms, (state) => ({
    ...state,
    rooms: [],
  }))
);
