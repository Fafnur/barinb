import { createEntityState, createState } from '@app/core/store/utils';
import { PersonEntity } from '@app/persons/common';

import * as PersonActions from './person.actions';
import { personInitialState, PersonState, reducer } from './person.reducer';
import { ENTITY_STUB, NEW_PERSON_STUB, PERSON_LOAD_ERROR, PERSON_STUB, PERSONS_STUB } from './person.stub';

describe('PersonReducer', () => {
  const getState = (payload?: Partial<PersonState>): PersonState => createState(personInitialState, payload);

  it('loadPersons() should clear personsLoadError', () => {
    const state = getState({ personsLoadError: PERSON_LOAD_ERROR });
    const action = PersonActions.loadPersons();
    const result = reducer(state, action);

    expect(result.personsLoadError).toBeNull();
  });

  it('loadPersonsSuccess() should set persons', () => {
    const state = getState();
    const action = PersonActions.loadPersonsSuccess({ payload: PERSONS_STUB });
    const result = reducer(state, action);

    expect(Object.keys(result.entities).length).toBe(PERSONS_STUB.length);
  });

  it('loadPersonsFailure() should set personsLoadError', () => {
    const state = getState();
    const action = PersonActions.loadPersonsFailure({ payload: PERSON_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.personsLoadError).toEqual(PERSON_LOAD_ERROR);
  });

  it('clearPersons() should clears persons', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const action = PersonActions.clearPersons();
    const result = reducer(state, action);

    expect(result.ids.length).toBe(0);
  });

  it('removePerson() should clear personsLoadError', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const action = PersonActions.removePerson({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as PersonEntity;

    expect(entity.personRemoveRun).toBeTruthy();
  });

  it('removePersonFailure() should set personRemoveError', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const payload = { ...PERSON_LOAD_ERROR, ...ENTITY_STUB };
    const action = PersonActions.removePersonFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as PersonEntity;

    expect(entity.personRemoveError).toEqual(payload);
  });

  it('addPerson() should set personCreateRun true', () => {
    const state = getState();
    const action = PersonActions.addPerson({ payload: NEW_PERSON_STUB });
    const result = reducer(state, action);

    expect(result.personCreateRun).toBeTruthy();
  });

  it('addPersonSuccess() should add persons', () => {
    const state = getState({ personCreateRun: true });
    const action = PersonActions.addPersonSuccess({ payload: PERSON_STUB });
    const result = reducer(state, action);

    expect(Object.keys(result.entities).length).toBe(1);
  });

  it('addPersonFailure() should set personCreateError', () => {
    const state = getState();
    const action = PersonActions.addPersonFailure({ payload: PERSON_LOAD_ERROR });
    const result = reducer(state, action);

    expect(result.personCreateError).toEqual(PERSON_LOAD_ERROR);
  });

  it('changePerson() should clear personsLoadError', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const action = PersonActions.changePerson({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as PersonEntity;

    expect(entity.personChangeRun).toBeTruthy();
  });

  it('changePersonSuccess() should clear personsLoadError', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const action = PersonActions.changePersonSuccess({ payload: ENTITY_STUB });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as PersonEntity;

    expect(entity.personChangeRun).toBeFalsy();
  });

  it('changePersonFailure() should set personRemoveError', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const payload = { ...PERSON_LOAD_ERROR, ...ENTITY_STUB };
    const action = PersonActions.changePersonFailure({ payload });
    const result = reducer(state, action);
    const entity = result.entities[ENTITY_STUB.id] as PersonEntity;

    expect(entity.personChangeError).toEqual(payload);
  });

  it('should return the previous state', () => {
    const action = {} as any;

    const result = reducer(personInitialState, action);

    expect(result).toBe(personInitialState);
  });
});
