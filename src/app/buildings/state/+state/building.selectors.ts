import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BUILDING_FEATURE_KEY, BuildingState } from './building.reducer';

export const selectBuildingState = createFeatureSelector<BuildingState>(BUILDING_FEATURE_KEY);

export const selectBuildings = createSelector(selectBuildingState, (state) => state.buildings);

export const selectBuildingsLoadError = createSelector(selectBuildingState, (state) => state.buildingsLoadError);
