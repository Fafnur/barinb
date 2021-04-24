import { Building } from '@app/buildings/common';

export const BUILDINGS_STUB: Building[] = [
  {
    id: 1,
    owner: 1,
    rooms: [1],
    name: 'Отель Иванов',
    city: 'Санкт-Петербург',
    latitude: 59.94025370914283,
    longitude: 30.35245818826544,
    address: 'Басков пер., 2 стр1, Санкт-Петербург, 191014',
  },
  {
    id: 2,
    owner: 2,
    rooms: [2, 3],
    name: 'Баринтель',
    city: 'Санкт-Петербург',
    latitude: 59.93663944788429,
    longitude: 30.35304433662398,
    address: 'ул. Чехова, 3, Санкт-Петербург, 191014',
  },
  {
    id: 3,
    owner: 3,
    rooms: [4, 5, 6],
    name: 'Парадный',
    city: 'Санкт-Петербург',
    latitude: 59.94205216106154,
    longitude: 30.36729639990369,
    address: 'Парадная ул., 3 к 2, Санкт-Петербург, 191015',
  },
  {
    id: 4,
    owner: 3,
    rooms: [7, 8],
    name: 'Биссектриса',
    city: 'Санкт-Петербург',
    latitude: 59.936517402783004,
    longitude: 30.360502046156643,
    address: 'ул. Восстания, 23, Санкт-Петербург, Ленинградская обл., 191014',
  },
];
