import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { RoomEntity } from '@app/rooms/common';

export const loadRooms = createAction('[Room] Load Rooms');

export const loadRoomsCancel = createAction('[Room] Load Rooms Cancel');

export const loadRoomsSuccess = createAction('[Room] Load Rooms Success', payload<RoomEntity[]>());

export const loadRoomsFailure = createAction('[Room] Load Rooms Failure', payload<Record<string, any>>());

export const clearRooms = createAction('[Room] Clear Rooms');

export const removeRoom = createAction('[Room] Remove Room', payload<Entity>());

export const removeRoomCancel = createAction('[Room] Remove Room Cancel');

export const removeRoomSuccess = createAction('[Room] Remove Room Success', payload<Entity>());

export const removeRoomFailure = createAction('[Room] Remove Room Failure', payload<Record<string, any> & Entity>());
