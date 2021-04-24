import { Person } from '@app/persons/common';

export const PERSON_STUB: Person = {
  id: 1,
  lastName: 'Иванов',
  firstName: 'Дмитрий',
  middleName: 'Сергеевич',
  buildings: [1],
  phone: '9231002020',
  avatar: '/assets/images/avatars/avatar-1.jpg',
};

export const PERSONS_STUB: Person[] = [PERSON_STUB];

export const PERSONS_LOAD_ERROR = { code: 0, message: 'Failure load persons' };
