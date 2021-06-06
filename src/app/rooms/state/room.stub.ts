import { Entity } from '@app/core/common';
import { ChangedRoom, NewRoom, Room, RoomAmenities, RoomDto, RoomField } from '@app/rooms/common';

export const ROOM_DTO_STUB: RoomDto = {
  id: 1,
  building: 1,
  guests: 2,
  beds: 1,
  bedrooms: 1,
  bathrooms: 1,
  price: 2500,
  description:
    'Уютная квартира в самом центре города. В шаговой доступности НИИТО, стадион Спартак, центральный ' +
    'парк, жд вокзал, метро, площадь Ленина.',
  amenities: [
    RoomAmenities.AirConditioning,
    RoomAmenities.Elevator,
    RoomAmenities.CarbonMonoxideAlarm,
    RoomAmenities.Hangers,
    RoomAmenities.Tv,
  ],
  photos: ['/photo.jpg'],
  created: '2021-05-11T01:14:42.988Z',
  updated: '2021-05-11T01:14:44.000Z',
};

export const ROOM_STUB: Room = {
  ...ROOM_DTO_STUB,
  roomRemoveError: null,
  roomRemoveRun: false,
  roomChangeError: null,
  roomChangeRun: false,
};

export const ROOMS_STUB: Room[] = [ROOM_STUB];

export const ROOM_LOAD_ERROR = { code: 0, message: 'Failure load rooms' };

export const ENTITY_STUB: Entity = {
  id: ROOM_STUB.id,
};

export const NEW_ROOM_STUB: NewRoom = {
  [RoomField.Person]: 1,
  [RoomField.Building]: 1,
  [RoomField.Guests]: 1,
  [RoomField.Bedrooms]: 1,
  [RoomField.Beds]: 1,
  [RoomField.Bathrooms]: 1,
  [RoomField.Photos]: ['/photo.jpg'],
  [RoomField.Amenities]: [RoomAmenities.Hangers],
  [RoomField.Description]: 'Room description',
  [RoomField.Price]: 1020,
};

export const CHANGED_ROOM_STUB: ChangedRoom = {
  [RoomField.ID]: 1,
  [RoomField.Person]: 1,
  [RoomField.Building]: 1,
  [RoomField.Guests]: 1,
  [RoomField.Bedrooms]: 1,
  [RoomField.Beds]: 1,
  [RoomField.Bathrooms]: 1,
  [RoomField.Photos]: ['/photo.jpg'],
  [RoomField.Amenities]: [RoomAmenities.Hangers],
  [RoomField.Description]: 'Room description',
  [RoomField.Price]: 2000,
};
