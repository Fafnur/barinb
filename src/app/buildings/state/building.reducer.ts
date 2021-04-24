import { createReducer, on } from '@ngrx/store';

import { Building } from '@app/buildings/common';

import * as BuildingActions from './building.actions';

export const BUILDING_FEATURE_KEY = 'buildings';

export interface BuildingState {
  buildings: Building[] | null;
  buildingsLoadError: Record<string, any> | null;
}

export interface RoomPartialState {
  readonly [BUILDING_FEATURE_KEY]: BuildingState;
}

export const buildingInitialState: BuildingState = {
  buildings: null,
  buildingsLoadError: null,
};

export const reducer = createReducer(
  buildingInitialState,
  on(BuildingActions.loadBuildings, (state) => ({
    ...state,
    buildingsLoadError: null,
  })),
  on(BuildingActions.loadBuildingsSuccess, (state, { payload }) => ({
    ...state,
    buildings: payload,
  })),
  on(BuildingActions.loadBuildingsFailure, (state, { payload }) => ({
    ...state,
    buildingsLoadError: payload,
  }))
);
