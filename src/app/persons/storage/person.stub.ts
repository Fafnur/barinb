import { Person } from '@app/persons/common';

export const PERSONS_STUB: Person[] = [
  {
    id: 1,
    lastName: 'Иванов',
    firstName: 'Дмитрий',
    middleName: 'Сергеевич',
    buildings: [1],
    phone: '9231002020',
    avatar: '/assets/images/persons/avatar-1.jpg',
  },
  {
    id: 2,
    lastName: 'Смирнова',
    firstName: 'Мария',
    middleName: 'Александровна',
    buildings: [2],
    phone: '9139002010',
    avatar: '/assets/images/persons/avatar-2.jpg',
  },
  {
    id: 3,
    lastName: 'Полякова',
    firstName: 'Евгения',
    middleName: 'Семеновна',
    buildings: [3, 4],
    phone: '9139002099',
    avatar: '/assets/images/persons/avatar-3.jpg',
  },
];
