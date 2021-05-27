import { BuildingEntity } from '@app/buildings/common';
import { createEntityState, createState } from '@app/core/store/utils';

import * as BuildingActions from './building.actions';
import { buildingInitialState, BuildingState, reducer } from './building.reducer';
import { BUILDING_STUB, BUILDINGS_LOAD_ERROR, BUILDINGS_STUB, ENTITY_STUB, NEW_BUILDING_STUB } from './building.stub';

describe('BuildingReducer', () => {
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

    expect(Object.keys(result.entities).length).toBe(BUILDINGS_STUB.length);
  });

  it('loadBuildingsFailure() should set buildingsLoadError', () => {
    const state = getState();
    const action = BuildingActions.loadBuildingsFailure({ payload: BUILDINGS_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.buildingsLoadError).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('clearBuildings() should clears buildings', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const action = BuildingActions.clearBuildings();
    const result = reducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('removeBuilding() should clear buildingsLoadError', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const action = BuildingActions.removeBuilding({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as BuildingEntity;

    expect(entity.buildingRemoveRun).toBeTruthy();
  });

  it('removeBuildingFailure() should set buildingRemoveError', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const payload = { ...BUILDINGS_LOAD_ERROR, ...ENTITY_STUB };
    const action = BuildingActions.removeBuildingFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as BuildingEntity;

    expect(entity.buildingRemoveError).toEqual(payload);
  });

  it('addBuilding() should set buildingCreateRun true', () => {
    const state = getState();
    const action = BuildingActions.addBuilding({ payload: NEW_BUILDING_STUB });
    const result = reducer(state, action);

    expect(result.buildingCreateRun).toBeTruthy();
  });

  it('addBuildingSuccess() should add buildings', () => {
    const state = getState({ buildingCreateRun: true });
    const action = BuildingActions.addBuildingSuccess({ payload: BUILDING_STUB });
    const result = reducer(state, action);

    expect(Object.keys(result.entities).length).toBe(1);
  });

  it('addBuildingFailure() should set buildingCreateError', () => {
    const state = getState();
    const action = BuildingActions.addBuildingFailure({ payload: BUILDINGS_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.buildingCreateError).toEqual(BUILDINGS_LOAD_ERROR);
  });

  it('changeBuilding() should clear buildingsLoadError', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const action = BuildingActions.changeBuilding({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as BuildingEntity;

    expect(entity.buildingChangeRun).toBeTruthy();
  });

  it('changeBuildingSuccess() should clear buildingsLoadError', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const action = BuildingActions.changeBuildingSuccess({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as BuildingEntity;

    expect(entity.buildingChangeRun).toBeFalsy();
  });

  it('changeBuildingFailure() should set buildingRemoveError', () => {
    const state = getState({ ...createEntityState(BUILDINGS_STUB) });
    const payload = { ...BUILDINGS_LOAD_ERROR, ...ENTITY_STUB };
    const action = BuildingActions.changeBuildingFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as BuildingEntity;

    expect(entity.buildingChangeError).toEqual(payload);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(buildingInitialState, action);

    expect(result).toBe(buildingInitialState);
  });
});
