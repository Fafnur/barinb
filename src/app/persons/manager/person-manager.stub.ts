import { BUILDING_STUB } from '@app/buildings/state';
import { PERSON_STUB } from '@app/persons/state';
import { ROOMS_STUB } from '@app/rooms/state';

import { PersonExtended } from './person.manager';

export const PERSON_EXTENDED_STUB: PersonExtended = {
  ...PERSON_STUB,
  buildingsExtended: [{ ...BUILDING_STUB, roomsExtended: ROOMS_STUB }],
};

export const PERSONS_EXTENDED_STUB: PersonExtended[] = [PERSON_EXTENDED_STUB];
