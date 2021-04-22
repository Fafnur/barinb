import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ROOM_FEATURE_KEY, RoomState } from './room.reducer';

export const selectRoomState = createFeatureSelector<RoomState>(ROOM_FEATURE_KEY);

export const selectRooms = createSelector(selectRoomState, (state) => state.rooms);

export const selectRoomsLoadError = createSelector(selectRoomState, (state) => state.roomsLoadError);
