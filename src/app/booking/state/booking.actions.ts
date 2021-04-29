import { createAction } from '@ngrx/store';

import { payload } from '@app/core/store/utils';
import { Room } from '@app/rooms/common';

export const setRoom = createAction('[Booking] Set Rooms', payload<Room>());

export const clearRoom = createAction('[Booking] Clear Rooms');
