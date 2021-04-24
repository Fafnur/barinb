import { createReducer, on } from '@ngrx/store';

import { Person } from '@app/persons/common';

import * as PersonActions from './person.actions';

export const PERSON_FEATURE_KEY = 'persons';

export interface PersonState {
  persons: Person[] | null;
  personsLoadError: Record<string, any> | null;
}

export interface PersonPartialState {
  readonly [PERSON_FEATURE_KEY]: PersonState;
}

export const personInitialState: PersonState = {
  persons: null,
  personsLoadError: null,
};

export const reducer = createReducer(
  personInitialState,
  on(PersonActions.loadPersons, (state) => ({
    ...state,
    personsLoadError: null,
  })),
  on(PersonActions.loadPersonsSuccess, (state, { payload }) => ({
    ...state,
    persons: payload,
  })),
  on(PersonActions.loadPersonsFailure, (state, { payload }) => ({
    ...state,
    personsLoadError: payload,
  }))
);
