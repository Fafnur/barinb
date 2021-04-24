import { createState } from '@app/core/store/utils';

import * as BuildingActions from './person.actions';
import { personInitialState, PersonState, reducer } from './person.reducer';
import { PERSONS_LOAD_ERROR, PERSONS_STUB } from './person.stub';

describe('Person Reducer', () => {
  const getState = (payload?: Partial<PersonState>): PersonState => createState(personInitialState, payload);

  it('loadPersons() should clear personsLoadError', () => {
    const state = getState({ personsLoadError: PERSONS_LOAD_ERROR });
    const action = BuildingActions.loadPersons();
    const result = reducer(state, action);

    expect(result.personsLoadError).toBeNull();
  });

  it('loadPersonsSuccess() should set persons', () => {
    const state = getState();
    const action = BuildingActions.loadPersonsSuccess({ payload: PERSONS_STUB });
    const result = reducer(state, action);

    expect(result.persons?.length).toBe(PERSONS_STUB.length);
  });

  it('loadPersonsFailure() should set personsLoadError', () => {
    const state = getState();
    const action = BuildingActions.loadPersonsFailure({ payload: PERSONS_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.personsLoadError).toEqual(PERSONS_LOAD_ERROR);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(personInitialState, action);

    expect(result).toBe(personInitialState);
  });
});
