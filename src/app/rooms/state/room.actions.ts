import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { NewRoom, RoomEntity } from '@app/rooms/common';

export const loadRooms = createAction('[Room] Load Rooms');

export const loadRoomsCancel = createAction('[Room] Load Rooms Cancel');

export const loadRoomsSuccess = createAction('[Room] Load Rooms Success', payload<RoomEntity[]>());

export const loadRoomsFailure = createAction('[Room] Load Rooms Failure', payload<Record<string, any>>());

export const clearRooms = createAction('[Room] Clear Rooms');

export const removeRoom = createAction('[Room] Remove Room', payload<Entity>());

export const removeRoomCancel = createAction('[Room] Remove Room Cancel');

export const removeRoomSuccess = createAction('[Room] Remove Room Success', payload<Entity>());

export const removeRoomFailure = createAction('[Room] Remove Room Failure', payload<Record<string, any> & Entity>());

export const addRoom = createAction('[Room] Remove Room', payload<NewRoom>());

export const addRoomCancel = createAction('[Room] Remove Room Cancel');

export const addRoomSuccess = createAction('[Room] Remove Room Success', payload<RoomEntity>());

export const addRoomFailure = createAction('[Room] Remove Room Failure', payload<Record<string, any>>());
