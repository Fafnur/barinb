import { Building, BuildingField, ChangedBuilding, NewBuilding } from '@app/buildings/common';
import { Entity } from '@app/core/common';

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
  buildingChangeRun: false,
  buildingChangeError: null,
  buildingRemoveRun: false,
  buildingRemoveError: null,
  buildingRoomRemoveRun: false,
  buildingRoomRemoveError: null,
  buildingRoomAddRun: false,
  buildingRoomAddError: null,
};

export const BUILDINGS_STUB: Building[] = [BUILDING_STUB];

export const BUILDINGS_LOAD_ERROR = { code: 0, message: 'Failure load buildings' };

export const ENTITY_STUB: Entity = {
  id: 1,
};

export const NEW_BUILDING_STUB: NewBuilding = {
  [BuildingField.Name]: 'Alex',
  [BuildingField.Rooms]: [1, 2, 3],
  [BuildingField.Person]: 1,
  [BuildingField.City]: 'City',
  [BuildingField.Address]: 'New Address',
  [BuildingField.Created]: '2020-01-02',
  [BuildingField.Updated]: '2020-01-02',
  [BuildingField.Lat]: 10.01,
  [BuildingField.Lng]: 20.01,
};

export const CHANGED_BUILDING_STUB: ChangedBuilding = {
  [BuildingField.ID]: 1,
  [BuildingField.Rooms]: [1, 2, 3],
  [BuildingField.Person]: 1,
  [BuildingField.City]: 'City',
  [BuildingField.Address]: 'New Address',
  [BuildingField.Created]: '2020-01-02',
  [BuildingField.Updated]: '2020-01-02',
  [BuildingField.Lat]: 10.01,
  [BuildingField.Lng]: 20.01,
};
