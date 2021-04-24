import { createStore } from '@app/core/store/utils';

import { PERSON_FEATURE_KEY, personInitialState, PersonPartialState, PersonState } from './person.reducer';
import * as BuildingSelectors from './person.selectors';
import { PERSONS_LOAD_ERROR, PERSONS_STUB } from './person.stub';

describe('Person Selectors', () => {
  const getState = (payload: Partial<PersonState>): PersonPartialState => createStore(PERSON_FEATURE_KEY, personInitialState, payload);

  it('selectPersons() should return persons', () => {
    const state = getState({ persons: PERSONS_STUB });
    const results = BuildingSelectors.selectPersons(state);

    expect(results?.length).toBe(PERSONS_STUB.length);
  });

  it('selectPersonsLoadError() should return personsLoadError', () => {
    const state = getState({ personsLoadError: PERSONS_LOAD_ERROR });
    const results = BuildingSelectors.selectPersonsLoadError(state);

    expect(results).toEqual(PERSONS_LOAD_ERROR);
  });
});
