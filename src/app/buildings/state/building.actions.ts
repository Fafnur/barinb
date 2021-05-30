import { createAction } from '@ngrx/store';

import { Building, BuildingEntity, ChangeBuildingRoom, ChangedBuilding, ChangedBuildingRoom, NewBuilding } from '@app/buildings/common';
import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';

export const loadBuildings = createAction('[Building] Load Buildings');

export const loadBuildingsSuccess = createAction('[Building] Load Buildings Success', payload<Building[]>());

export const loadBuildingsFailure = createAction('[Building] Load Buildings Failure', payload<Record<string, any>>());

export const clearBuildings = createAction('[Building] Clear Buildings');

export const clearBuildingsRooms = createAction('[Building] Clear Buildings Rooms');

export const clearBuildingsRoomsCancel = createAction('[Building] Clear Buildings Rooms Cancel');

export const clearBuildingsRoomsSuccess = createAction('[Building] Clear Buildings Rooms Success', payload<BuildingEntity[]>());

export const clearBuildingsRoomsFailure = createAction('[Building] Clear Buildings Rooms Failure', payload<Record<string, any>>());

export const removeBuilding = createAction('[Building] Remove Building', payload<Entity>());

export const removeBuildingCancel = createAction('[Building] Remove Building Cancel');

export const removeBuildingSuccess = createAction('[Building] Remove Building Success', payload<Entity>());

export const removeBuildingFailure = createAction('[Building] Remove Building Failure', payload<Record<string, any> & Entity>());

export const removeBuildings = createAction('[Building] Remove Buildings', payload<number[]>());

export const removeBuildingsCancel = createAction('[Building] Remove Buildings Cancel');

export const removeBuildingsSuccess = createAction('[Building] Remove Buildings Success', payload<number[]>());

export const removeBuildingsFailure = createAction(
  '[Building] Remove Buildings Failure',
  payload<Record<string, any> & { buildings: number[] }>()
);

export const removeBuildingRoom = createAction('[Building] Remove Building Room', payload<ChangeBuildingRoom>());

export const removeBuildingRoomCancel = createAction('[Building] Remove Building Room Cancel');

export const removeBuildingRoomSuccess = createAction('[Building] Remove Building Room Success', payload<ChangedBuildingRoom>());

export const removeBuildingRoomFailure = createAction('[Building] Remove Building Room Failure', payload<Record<string, any> & Entity>());

export const addBuilding = createAction('[Building] Add Building', payload<NewBuilding>());

export const addBuildingCancel = createAction('[Building] Add Building Cancel');

export const addBuildingSuccess = createAction('[Building] Add Building Success', payload<BuildingEntity>());

export const addBuildingFailure = createAction('[Building] Add Building Failure', payload<Record<string, any>>());

export const addBuildingRoom = createAction('[Building] Add Building Room', payload<ChangeBuildingRoom>());

export const addBuildingRoomCancel = createAction('[Building] Add Building Room Cancel');

export const addBuildingRoomSuccess = createAction('[Building] Add Building Room Success', payload<ChangedBuildingRoom>());

export const addBuildingRoomFailure = createAction('[Building] Add Building Room Failure', payload<Record<string, any>>());

export const changeBuilding = createAction('[Building] Change Building', payload<ChangedBuilding>());

export const changeBuildingCancel = createAction('[Building] Change Building Cancel');

export const changeBuildingSuccess = createAction('[Building] Change Building Success', payload<ChangedBuilding>());

export const changeBuildingFailure = createAction('[Building] Change Building Failure', payload<Record<string, any>>());
