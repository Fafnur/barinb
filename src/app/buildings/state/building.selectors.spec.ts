import { createStore } from '@app/core/store/utils';

import { BUILDING_FEATURE_KEY, buildingInitialState, BuildingState, RoomPartialState } from './building.reducer';
import * as BuildingSelectors from './building.selectors';
import { BUILDING_STUB, BUILDINGS_LOAD_ERROR, BUILDINGS_STUB } from './building.stub';

describe('Building Selectors', () => {
  const getState = (payload: Partial<BuildingState>): RoomPartialState => createStore(BUILDING_FEATURE_KEY, buildingInitialState, payload);

  it('selectBuildings() should return buildings', () => {
    const state = getState({ buildings: BUILDINGS_STUB });
    const results = BuildingSelectors.selectBuildings(state);

    expect(results?.length).toBe(BUILDINGS_STUB.length);
  });

  it('selectBuildingsLoadError() should return buildingsLoadError', () => {
    const state = getState({ buildingsLoadError: BUILDINGS_LOAD_ERROR });
    const results = BuildingSelectors.selectBuildingsLoadError(state);

    expect(results).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('selectBuilding() should return building by id', () => {
    const state = getState({ buildings: BUILDINGS_STUB });
    const result = BuildingSelectors.selectBuilding(state, { id: BUILDING_STUB.id });

    expect(result).toEqual(BUILDING_STUB);
  });

  it('selectBuildingsByPerson() should return buildings by person', () => {
    const state = getState({ buildings: BUILDINGS_STUB });
    const results = BuildingSelectors.selectBuildingsByPerson(state, { id: BUILDING_STUB.person });

    expect(results?.length).toBe(BUILDINGS_STUB.length);
  });
});
