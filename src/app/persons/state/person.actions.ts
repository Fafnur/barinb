import { createAction } from '@ngrx/store';

import { payload } from '@app/core/store/utils';
import { Person } from '@app/persons/common';

export const loadPersons = createAction('[Person] Load Persons');

export const loadPersonsSuccess = createAction('[Person] Load Persons Success', payload<Person[]>());

export const loadPersonsFailure = createAction('[Person] Load Persons Failure', payload<Record<string, any>>());
