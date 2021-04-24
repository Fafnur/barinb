import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Building } from '@app/buildings/common';
import { Entity } from '@app/core/common';

import { BUILDING_FEATURE_KEY, BuildingState } from './building.reducer';

export const selectBuildingState = createFeatureSelector<BuildingState>(BUILDING_FEATURE_KEY);

export const selectBuildings = createSelector(selectBuildingState, (state) => state.buildings);

export const selectBuildingsLoadError = createSelector(selectBuildingState, (state) => state.buildingsLoadError);

export const selectBuilding = createSelector(
  selectBuildingState,
  (state: BuildingState, props: Entity): Building | null => state.buildings?.find((building) => building.id === props.id) ?? null
);

export const selectBuildingsByPerson = createSelector(
  selectBuildingState,
  (state: BuildingState, props: Entity): Building[] | null => state.buildings?.filter((building) => building.person === props.id) ?? null
);
