import { createAction } from '@ngrx/store';

import { payload } from '@app/core/store/utils';
import { Room } from '@app/rooms/common';

export const loadRooms = createAction('[Room] Load Rooms');

export const loadRoomsSuccess = createAction('[Room] Load Rooms Success', payload<Room[]>());

export const loadRoomsFailure = createAction('[Room] Load Rooms Failure', payload<Record<string, any>>());
