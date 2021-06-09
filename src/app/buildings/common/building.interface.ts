import { Entity } from '@app/core/common';

export interface BuildingDto {
  readonly id: number;
  readonly name: string;
  readonly rooms: number[];
  readonly person: number;
  readonly city: string;
  readonly address: string;
  readonly created: string;
  readonly updated: string;
  readonly lat: number;
  readonly lng: number;
}

export interface BuildingEntity {
  id: number;
  name: string;
  rooms: number[];
  person: number;
  city: string;
  address: string;
  created: string;
  updated: string;
  lat: number;
  lng: number;

  buildingRemoveRun: boolean;
  buildingRemoveError: Record<string, any> | null;
  buildingChangeRun: boolean;
  buildingChangeError: Record<string, any> | null;
  buildingRoomRemoveRun: boolean;
  buildingRoomRemoveError: Record<string, any> | null;
  buildingRoomAddRun: boolean;
  buildingRoomAddError: Record<string, any> | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Building extends BuildingEntity {}

export enum BuildingField {
  ID = 'id',
  Name = 'name',
  Rooms = 'rooms',
  Person = 'person',
  City = 'city',
  Address = 'address',
  Created = 'created',
  Updated = 'updated',
  Lat = 'lat',
  Lng = 'lng',
}

export interface NewBuilding {
  [BuildingField.Name]: string;
  [BuildingField.Rooms]: number[];
  [BuildingField.Person]: number;
  [BuildingField.City]: string;
  [BuildingField.Address]: string;
  [BuildingField.Created]: string;
  [BuildingField.Updated]: string;
  [BuildingField.Lat]: number;
  [BuildingField.Lng]: number;
}

export type ChangedBuilding = Partial<NewBuilding> & Entity;

export const BUILDINGS_IDS: Record<BuildingField, string> = {
  [BuildingField.ID]: 'BuildingId',
  [BuildingField.Name]: 'BuildingName',
  [BuildingField.Rooms]: 'BuildingRooms',
  [BuildingField.Person]: 'BuildingPerson',
  [BuildingField.City]: 'BuildingCity',
  [BuildingField.Address]: 'BuildingAddress',
  [BuildingField.Created]: 'BuildingCreated',
  [BuildingField.Updated]: 'BuildingUpdated',
  [BuildingField.Lat]: 'BuildingLat',
  [BuildingField.Lng]: 'BuildingLng',
};

export interface ChangeBuildingRoom {
  id: number;
  room: number;
}

export interface ChangedBuildingRoom {
  id: number;
  rooms: number[];
}
