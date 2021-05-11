import { Person } from '@app/persons/common';

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
};

export const PERSONS_STUB: Person[] = [PERSON_STUB];

export const PERSONS_LOAD_ERROR = { code: 0, message: 'Failure load persons' };
