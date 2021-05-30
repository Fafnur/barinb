import { Entity } from '@app/core/common';
import { ChangedPerson, NewPerson, Person, PersonField } from '@app/persons/common';

export const PERSON_STUB: Person = {
  id: 1,
  lastName: 'Иванов',
  firstName: 'Дмитрий',
  middleName: 'Сергеевич',
  buildings: [1],
  phone: '9231002020',
  avatar: '/assets/images/avatars/avatar-1.jpg',
  created: '2021-05-11T01:14:42.988Z',
  updated: '2021-05-11T01:14:44.000Z',

  personChangeRun: false,
  personChangeError: null,
  personRemoveRun: false,
  personRemoveError: null,
  personBuildingRemoveRun: false,
  personBuildingRemoveError: null,
  personBuildingAddError: null,
  personBuildingAddRun: false,
};

export const PERSONS_STUB: Person[] = [PERSON_STUB];

export const PERSON_LOAD_ERROR = { code: 0, message: 'Failure load persons' };

export const ENTITY_STUB: Entity = {
  id: PERSON_STUB.id,
};

export const NEW_PERSON_STUB: NewPerson = {
  [PersonField.FirstName]: 'Max',
  [PersonField.LastName]: 'Voron',
  [PersonField.MiddleName]: 'Gray',
  [PersonField.Phone]: '+79231002200',
  [PersonField.Buildings]: [1, 2],
  [PersonField.Avatar]: '/best.jpg',
};

export const CHANGED_PERSON_STUB: ChangedPerson = {
  [PersonField.ID]: 1,
  [PersonField.FirstName]: 'Max',
  [PersonField.LastName]: 'Voron',
  [PersonField.MiddleName]: 'Gray',
  [PersonField.Phone]: '+79231002200',
  [PersonField.Buildings]: [1, 2],
  [PersonField.Avatar]: '/best.jpg',
};
