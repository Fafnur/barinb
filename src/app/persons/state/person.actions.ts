import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { ChangedPerson, NewPerson, PersonEntity, RemovedPersonBuilding, RemovePersonBuilding } from '@app/persons/common';

export const loadPersons = createAction('[Person] Load Persons');

export const loadPersonsCancel = createAction('[Person] Load Persons Cancel');

export const loadPersonsSuccess = createAction('[Person] Load Persons Success', payload<PersonEntity[]>());

export const loadPersonsFailure = createAction('[Person] Load Persons Failure', payload<Record<string, any>>());

export const clearPersons = createAction('[Person] Clear Persons');

export const clearPersonsBuildings = createAction('[Person] Clear Persons Buildings');

export const clearPersonsBuildingsCancel = createAction('[Person] Clear Persons Buildings Cancel');

export const clearPersonsBuildingsSuccess = createAction('[Person] Clear Persons Buildings Success', payload<PersonEntity[]>());

export const clearPersonsBuildingsFailure = createAction('[Person] Clear Persons Buildings Failure', payload<Record<string, any>>());

export const removePerson = createAction('[Person] Remove Person', payload<Entity>());

export const removePersonCancel = createAction('[Person] Remove Person Cancel');

export const removePersonSuccess = createAction('[Person] Remove Person Success', payload<Entity>());

export const removePersonFailure = createAction('[Person] Remove Person Failure', payload<Record<string, any> & Entity>());

export const removePersonBuilding = createAction('[Person] Remove Person Building', payload<RemovePersonBuilding>());

export const removePersonBuildingCancel = createAction('[Person] Remove Building Room Cancel');

export const removePersonBuildingSuccess = createAction('[Person] Remove Building Room Success', payload<RemovedPersonBuilding>());

export const removePersonBuildingFailure = createAction('[Person] Remove Building Room Failure', payload<Record<string, any> & Entity>());

export const addPerson = createAction('[Person] Remove Person', payload<NewPerson>());

export const addPersonCancel = createAction('[Person] Remove Person Cancel');

export const addPersonSuccess = createAction('[Person] Remove Person Success', payload<PersonEntity>());

export const addPersonFailure = createAction('[Person] Remove Person Failure', payload<Record<string, any>>());

export const changePerson = createAction('[Person] Change Person', payload<ChangedPerson>());

export const changePersonCancel = createAction('[Person] Change Person Cancel');

export const changePersonSuccess = createAction('[Person] Change Person Success', payload<ChangedPerson>());

export const changePersonFailure = createAction('[Person] Change Person Failure', payload<Record<string, any>>());
