import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { ChangedPerson, NewPerson, PersonEntity } from '@app/persons/common';

export const loadPersons = createAction('[Person] Load Persons');

export const loadPersonsCancel = createAction('[Person] Load Persons Cancel');

export const loadPersonsSuccess = createAction('[Person] Load Persons Success', payload<PersonEntity[]>());

export const loadPersonsFailure = createAction('[Person] Load Persons Failure', payload<Record<string, any>>());

export const clearPersons = createAction('[Person] Clear Persons');

export const removePerson = createAction('[Person] Remove Person', payload<Entity>());

export const removePersonCancel = createAction('[Person] Remove Person Cancel');

export const removePersonSuccess = createAction('[Person] Remove Person Success', payload<Entity>());

export const removePersonFailure = createAction('[Person] Remove Person Failure', payload<Record<string, any> & Entity>());

export const addPerson = createAction('[Person] Remove Person', payload<NewPerson>());

export const addPersonCancel = createAction('[Person] Remove Person Cancel');

export const addPersonSuccess = createAction('[Person] Remove Person Success', payload<PersonEntity>());

export const addPersonFailure = createAction('[Person] Remove Person Failure', payload<Record<string, any>>());

export const changePerson = createAction('[Person] Change Person', payload<ChangedPerson>());

export const changePersonCancel = createAction('[Person] Change Person Cancel');

export const changePersonSuccess = createAction('[Person] Change Person Success', payload<ChangedPerson>());

export const changePersonFailure = createAction('[Person] Change Person Failure', payload<Record<string, any>>());
