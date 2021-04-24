import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PERSON_FEATURE_KEY, PersonState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PersonState>(PERSON_FEATURE_KEY);

export const selectPersons = createSelector(selectPersonState, (state) => state.persons);

export const selectPersonsLoadError = createSelector(selectPersonState, (state) => state.personsLoadError);
