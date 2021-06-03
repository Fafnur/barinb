import { BUILDING_STUB } from '@app/buildings/state';
import { PERSON_STUB } from '@app/persons/state';
import { ROOMS_STUB } from '@app/rooms/state';

import { BuildingExtended } from './building.manager';

export const BUILDING_EXTENDED_STUB: BuildingExtended = {
  ...BUILDING_STUB,
  roomsExtended: ROOMS_STUB,
  personExtended: PERSON_STUB,
};

export const BUILDINGS_EXTENDED_STUB: BuildingExtended[] = [BUILDING_EXTENDED_STUB];
