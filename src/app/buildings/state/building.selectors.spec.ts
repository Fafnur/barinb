import { createEntityState, createStore } from '@app/core/store/utils';

import { BUILDING_FEATURE_KEY, buildingInitialState, BuildingPartialState, BuildingState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';
import { BUILDING_STUB, BUILDINGS_LOAD_ERROR, BUILDINGS_STUB } from './building.stub';

describe('Building Selectors', () => {
  const getState = (payload: Partial<BuildingState>): BuildingPartialState =>
    createStore(BUILDING_FEATURE_KEY, buildingInitialState, payload);

  it('selectBuildings() should return buildings', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const results = BuildingSelectors.selectBuildings(state);

    expect(results?.length).toBe(BUILDINGS_STUB.length);
  });

  it('selectBuildingsLoadError() should return buildingsLoadError', () => {
    const state = getState({ buildingsLoadError: BUILDINGS_LOAD_ERROR });
    const results = BuildingSelectors.selectBuildingsLoadError(state);

    expect(results).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('selectBuildingsLoadRun() should return buildingsLoadRun', () => {
    const state = getState({ buildingsLoadRun: true });
    const results = BuildingSelectors.selectBuildingsLoadRun(state);

    expect(results).toBeTruthy();
  });

  it('selectBuildingCreateError() should return buildingCreateError', () => {
    const state = getState({ buildingCreateError: BUILDINGS_LOAD_ERROR });
    const results = BuildingSelectors.selectBuildingCreateError(state);

    expect(results).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('selectBuildingCreateRun() should return buildingCreateRun', () => {
    const state = getState({ buildingCreateRun: true });
    const results = BuildingSelectors.selectBuildingCreateRun(state);

    expect(results).toBeTruthy();
  });

  it('selectBuilding() should return building by id', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const result = BuildingSelectors.selectBuilding(BUILDING_STUB)(state);

    expect(result).toEqual(BUILDING_STUB);
  });
});
