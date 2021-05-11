import { Building } from '@app/buildings/common';

export const BUILDING_STUB: Building = {
  id: 1,
  person: 1,
  rooms: [1],
  name: 'Отель Иванов',
  city: 'Санкт-Петербург',
  lat: 59.94025370914283,
  lng: 30.35245818826544,
  address: 'Басков пер., 2 стр1, Санкт-Петербург, 191014',
  created: '2021-05-11T01:14:42.988Z',
  updated: '2021-05-11T01:14:44.000Z',
};

export const BUILDINGS_STUB: Building[] = [BUILDING_STUB];

export const BUILDINGS_LOAD_ERROR = { code: 0, message: 'Failure load buildings' };
