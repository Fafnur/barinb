import { createState } from '@app/core/store/utils';

import * as BuildingActions from './building.actions';
import { buildingInitialState, BuildingState, reducer } from './building.reducer';
import { BUILDINGS_LOAD_ERROR, BUILDINGS_STUB } from './building.stub';

describe('Building Reducer', () => {
  const getState = (payload?: Partial<BuildingState>): BuildingState => createState(buildingInitialState, payload);

  it('loadBuildings() should clear buildingsLoadError', () => {
    const state = getState({ buildingsLoadError: BUILDINGS_LOAD_ERROR });
    const action = BuildingActions.loadBuildings();
    const result = reducer(state, action);

    expect(result.buildingsLoadError).toBeNull();
  });

  it('loadBuildingsSuccess() should set buildings', () => {
    const state = getState();
    const action = BuildingActions.loadBuildingsSuccess({ payload: BUILDINGS_STUB });
    const result = reducer(state, action);

    expect(result.buildings?.length).toBe(BUILDINGS_STUB.length);
  });

  it('loadBuildingsFailure() should set buildingsLoadError', () => {
    const state = getState();
    const action = BuildingActions.loadBuildingsFailure({ payload: BUILDINGS_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.buildingsLoadError).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(buildingInitialState, action);

    expect(result).toBe(buildingInitialState);
  });
});
