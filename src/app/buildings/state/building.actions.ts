import { createAction } from '@ngrx/store';

import { Building } from '@app/buildings/common';
import { payload } from '@app/core/store/utils';

export const loadBuildings = createAction('[Building] Load Buildings');

export const loadBuildingsSuccess = createAction('[Building] Load Buildings Success', payload<Building[]>());

export const loadBuildingsFailure = createAction('[Building] Load Buildings Failure', payload<Record<string, any>>());
