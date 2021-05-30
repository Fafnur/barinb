import { createAction } from '@ngrx/store';

import { Entity } from '@app/core/common';
import { payload } from '@app/core/store/utils';
import { ChangedPerson, ChangedPersonBuilding, ChangePersonBuilding, NewPerson, PersonEntity } from '@app/persons/common';

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

export const removePersonBuilding = createAction('[Person] Remove Person Building', payload<ChangePersonBuilding>());

export const removePersonBuildingCancel = createAction('[Person] Remove Building Room Cancel');

export const removePersonBuildingSuccess = createAction('[Person] Remove Building Room Success', payload<ChangedPersonBuilding>());

export const removePersonBuildingFailure = createAction('[Person] Remove Building Room Failure', payload<Record<string, any> & Entity>());

export const addPerson = createAction('[Person] Add Person', payload<NewPerson>());

export const addPersonCancel = createAction('[Person] Add Person Cancel');

export const addPersonSuccess = createAction('[Person] Add Person Success', payload<PersonEntity>());

export const addPersonFailure = createAction('[Person] Add Person Failure', payload<Record<string, any>>());

export const addPersonBuilding = createAction('[Person] Add Person Building', payload<ChangePersonBuilding>());

export const addPersonBuildingCancel = createAction('[Person] Add Person Building Cancel');

export const addPersonBuildingSuccess = createAction('[Person] Add Person Building Success', payload<ChangedPersonBuilding>());

export const addPersonBuildingFailure = createAction('[Person] Add Person Building Failure', payload<Record<string, any>>());

export const changePerson = createAction('[Person] Change Person', payload<ChangedPerson>());

export const changePersonCancel = createAction('[Person] Change Person Cancel');

export const changePersonSuccess = createAction('[Person] Change Person Success', payload<ChangedPerson>());

export const changePersonFailure = createAction('[Person] Change Person Failure', payload<Record<string, any>>());
