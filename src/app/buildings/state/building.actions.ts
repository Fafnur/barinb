import { createAction } from '@ngrx/store';

import { Building } from '@app/buildings/common';
import { payload } from '@app/core/store/utils';

export const loadBuildings = createAction('[Building] Load Buildings');

export const loadBuildingsSuccess = createAction('[Building] Load Buildings Success', payload<Building[]>());

export const loadBuildingsFailure = createAction('[Building] Load Buildings Failure', payload<Record<string, any>>());

export const clearBuildings = createAction('[Building] Clear Buildings');

export const clearBuildingsRooms = createAction('[Building] Clear Buildings Rooms');

export const clearBuildingsRoomsSuccess = createAction('[Building] Clear Buildings Success', payload<Building[] | null>());
export const clearBuildingsRoomsFailure = createAction('[Building] Clear Buildings Failure', payload<Record<string, any>>());
