import { Entity } from '@app/core/common';

export interface PersonDto {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName: string | null;

  readonly phone: string;
  readonly buildings: number[];
  readonly avatar?: string;

  readonly created: string;
  readonly updated: string;
}

export interface PersonEntity {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string | null;

  phone: string;
  buildings: number[];
  avatar?: string;

  created: string;
  updated: string;

  personRemoveRun: boolean;
  personRemoveError: Record<string, any> | null;
  personChangeRun: boolean;
  personChangeError: Record<string, any> | null;
  personBuildingRemoveRun: boolean;
  personBuildingRemoveError: Record<string, any> | null;
  personBuildingAddRun: boolean;
  personBuildingAddError: Record<string, any> | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Person extends PersonEntity {}

export enum PersonField {
  ID = 'id',
  FirstName = 'firstName',
  LastName = 'lastName',
  MiddleName = 'middleName',
  Phone = 'phone',
  Buildings = 'buildings',
  Avatar = 'avatar',
  Created = 'created',
  Updated = 'updated',
}

export interface NewPerson {
  [PersonField.FirstName]: string;
  [PersonField.LastName]: string;
  [PersonField.MiddleName]: string | null;
  [PersonField.Phone]: string;
  [PersonField.Buildings]: number[];
  [PersonField.Avatar]: string;
}

export type ChangedPerson = Partial<NewPerson> & Entity;

export const PERSONS_IDS: Record<PersonField, string> = {
  [PersonField.ID]: 'PersonId',
  [PersonField.FirstName]: 'PersonPerson',
  [PersonField.LastName]: 'PersonBuilding',
  [PersonField.MiddleName]: 'PersonGuests',
  [PersonField.Phone]: 'PersonPhone',
  [PersonField.Buildings]: 'PersonBuildings',
  [PersonField.Avatar]: 'PersonAvatar',
  [PersonField.Created]: 'PersonCreated',
  [PersonField.Updated]: 'PersonUpdated',
};

export interface ChangePersonBuilding {
  id: number;
  building: number;
}

export interface ChangedPersonBuilding {
  id: number;
  buildings: number[];
}
