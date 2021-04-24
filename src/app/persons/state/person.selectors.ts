import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { Person } from '@app/persons/common';

import { PERSON_FEATURE_KEY, PersonState } from './person.reducer';

export const selectPersonState = createFeatureSelector<PersonState>(PERSON_FEATURE_KEY);

export const selectPersons = createSelector(selectPersonState, (state) => state.persons);

export const selectPersonsLoadError = createSelector(selectPersonState, (state) => state.personsLoadError);

export const selectPerson = createSelector(
  selectPersonState,
  (state: PersonState, props: Entity): Person | null => state.persons?.find((person) => person.id === props.id) ?? null
);
