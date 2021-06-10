import { BUILDING_STUB } from '@app/buildings/state';
import { PERSON_STUB } from '@app/persons/state';
import { ROOM_STUB } from '@app/rooms/state';

import { RoomExtended } from './room.manager';

export const ROOM_EXTENDED_STUB: RoomExtended = {
  ...ROOM_STUB,
  buildingExtended: { ...BUILDING_STUB, personExtended: PERSON_STUB },
};

export const ROOMS_EXTENDED_STUB: RoomExtended[] = [ROOM_EXTENDED_STUB];
