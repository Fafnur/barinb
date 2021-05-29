import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { RoomEntity } from '@app/rooms/common';

import { ROOM_FEATURE_KEY, roomAdapter, RoomState } from './room.reducer';

export const selectRoomState = createFeatureSelector<RoomState>(ROOM_FEATURE_KEY);

const { selectAll, selectEntities } = roomAdapter.getSelectors();

export const selectRooms = createSelector(selectRoomState, (state) => selectAll(state));

export const selectRoomsEntities = createSelector(selectRoomState, (state) => selectEntities(state));

export const selectRoomsLoadError = createSelector(selectRoomState, (state) => state.roomsLoadError);

export const selectRoomsLoadRun = createSelector(selectRoomState, (state) => state.roomsLoadRun);

export const selectRoomCreateError = createSelector(selectRoomState, (state) => state.roomCreateError);

export const selectRoomCreateRun = createSelector(selectRoomState, (state) => state.roomCreateRun);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const selectRoom = (props: Entity) =>
  createSelector(selectRoomsEntities, (dictionary: Dictionary<RoomEntity>) => dictionary[props.id] ?? null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const selectRoomsByBuilding = (props: Entity) =>
  createSelector(selectRooms, (rooms: RoomEntity[]) => rooms?.filter((room) => room.building === props.id) ?? []);
