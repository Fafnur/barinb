import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BuildingEntity } from '@app/buildings/common';
import { Entity } from '@app/core/common';

import { BUILDING_FEATURE_KEY, buildingAdapter, BuildingState } from './building.reducer';

export const selectBuildingState = createFeatureSelector<BuildingState>(BUILDING_FEATURE_KEY);

const { selectAll, selectEntities } = buildingAdapter.getSelectors();

export const selectBuildings = createSelector(selectBuildingState, (state) => selectAll(state));

export const selectBuildingsEntities = createSelector(selectBuildingState, (state) => selectEntities(state));

export const selectBuildingsLoadError = createSelector(selectBuildingState, (state) => state.buildingsLoadError);

export const selectBuildingsLoadRun = createSelector(selectBuildingState, (state) => state.buildingsLoadRun);

export const selectBuildingCreateError = createSelector(selectBuildingState, (state) => state.buildingCreateError);

export const selectBuildingCreateRun = createSelector(selectBuildingState, (state) => state.buildingCreateRun);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const selectBuilding = (props: Entity) =>
  createSelector(selectBuildingsEntities, (dictionary: Dictionary<BuildingEntity>) => dictionary[props.id] ?? null);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types,@typescript-eslint/explicit-function-return-type
export const selectBuildingsByPerson = (props: Entity) =>
  createSelector(
    selectBuildings,
    (buildingEntities: BuildingEntity[]) => buildingEntities?.filter((room) => room.person === props.id) ?? []
  );
