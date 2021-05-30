import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { ChangedRoom, NewRoom, RoomEntity } from '@app/rooms/common';

export const loadRooms = createAction('[Room] Load Rooms');

export const loadRoomsCancel = createAction('[Room] Load Rooms Cancel');

export const loadRoomsSuccess = createAction('[Room] Load Rooms Success', payload<RoomEntity[]>());

export const loadRoomsFailure = createAction('[Room] Load Rooms Failure', payload<Record<string, any>>());

export const clearRooms = createAction('[Room] Clear Rooms');

export const removeRoom = createAction('[Room] Remove Room', payload<Entity>());

export const removeRoomCancel = createAction('[Room] Remove Room Cancel');

export const removeRoomSuccess = createAction('[Room] Remove Room Success', payload<Entity>());

export const removeRoomFailure = createAction('[Room] Remove Room Failure', payload<Record<string, any> & Entity>());

export const removeRooms = createAction('[Room] Remove Rooms', payload<number[]>());

export const removeRoomsCancel = createAction('[Room] Remove Rooms Cancel');

export const removeRoomsSuccess = createAction('[Room] Remove Rooms Success', payload<number[]>());

export const removeRoomsFailure = createAction('[Room] Remove Rooms Failure', payload<Record<string, any> & { rooms: number[] }>());

export const addRoom = createAction('[Room] Add Room', payload<NewRoom>());

export const addRoomCancel = createAction('[Room] Add Room Cancel');

export const addRoomSuccess = createAction('[Room] Add Room Success', payload<RoomEntity>());

export const addRoomFailure = createAction('[Room] Add Room Failure', payload<Record<string, any>>());

export const changeRoom = createAction('[Room] Change Room', payload<ChangedRoom>());

export const changeRoomCancel = createAction('[Room] Change Room Cancel');

export const changeRoomSuccess = createAction('[Room] Change Room Success', payload<ChangedRoom>());

export const changeRoomFailure = createAction('[Room] Change Room Failure', payload<Record<string, any>>());
