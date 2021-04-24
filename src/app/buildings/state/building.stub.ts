import { Building } from '@app/buildings/common';

export const BUILDING_STUB: Building = {
  id: 1,
  owner: 1,
  rooms: [1],
  name: 'Отель Иванов',
  city: 'Санкт-Петербург',
  latitude: 59.94025370914283,
  longitude: 30.35245818826544,
  address: 'Басков пер., 2 стр1, Санкт-Петербург, 191014',
};

export const BUILDINGS_STUB: Building[] = [BUILDING_STUB];

export const BUILDINGS_LOAD_ERROR = { code: 0, message: 'Failure load buildings' };
