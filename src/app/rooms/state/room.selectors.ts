import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { Room } from '@app/rooms/common';

import { ROOM_FEATURE_KEY, RoomState } from './room.reducer';

export const selectRoomState = createFeatureSelector<RoomState>(ROOM_FEATURE_KEY);

export const selectRooms = createSelector(selectRoomState, (state) => state.rooms);

export const selectRoomsLoadError = createSelector(selectRoomState, (state) => state.roomsLoadError);

export const selectRoom = createSelector(
  selectRoomState,
  (state: RoomState, props: Entity): Room | null => state.rooms?.find((room) => room.id === props.id) ?? null
);

export const selectRoomsByBuilding = createSelector(selectRoomState, (state: RoomState, props: Entity): Room[] | null =>
  state.rooms ? state.rooms.filter((room) => room.building === props.id) : null
);
