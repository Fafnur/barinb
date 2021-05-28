import { createEntityState, createStore } from '@app/core/store/utils';

import { PERSON_FEATURE_KEY, personInitialState, PersonPartialState, PersonState } from './person.reducer';
import * as PersonSelectors from './person.selectors';
import { PERSON_LOAD_ERROR, PERSON_STUB, PERSONS_STUB } from './person.stub';

describe('PersonSelectors', () => {
  const getState = (payload: Partial<PersonState>): PersonPartialState => createStore(PERSON_FEATURE_KEY, personInitialState, payload);

  it('selectPersons() should return persons', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const results = PersonSelectors.selectPersons(state);

    expect(results?.length).toBe(PERSONS_STUB.length);
  });

  it('selectPersonsLoadError() should return personsLoadError', () => {
    const state = getState({ personsLoadError: PERSON_LOAD_ERROR });
    const results = PersonSelectors.selectPersonsLoadError(state);

    expect(results).toEqual(PERSON_LOAD_ERROR);
  });

  it('selectPersonsLoadRun() should return personsLoadRun', () => {
    const state = getState({ personsLoadRun: true });
    const results = PersonSelectors.selectPersonsLoadRun(state);

    expect(results).toBeTruthy();
  });

  it('selectPersonCreateError() should return personCreateError', () => {
    const state = getState({ personCreateError: PERSON_LOAD_ERROR });
    const results = PersonSelectors.selectPersonCreateError(state);

    expect(results).toEqual(PERSON_LOAD_ERROR);
  });

  it('selectPersonCreateRun() should return personCreateRun', () => {
    const state = getState({ personCreateRun: true });
    const results = PersonSelectors.selectPersonCreateRun(state);

    expect(results).toBeTruthy();
  });

  it('selectPerson() should return person by id', () => {
    const state = getState({ ...createEntityState(PERSONS_STUB) });
    const result = PersonSelectors.selectPerson(PERSON_STUB)(state);

    expect(result).toEqual(PERSON_STUB);
  });
});
