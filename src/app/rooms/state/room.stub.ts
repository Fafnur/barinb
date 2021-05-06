import { Room, RoomAmenities } from '@app/rooms/common';

export const ROOM_STUB: Room = {
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
  photos: [],
};

export const ROOMS_STUB: Room[] = [ROOM_STUB];

export const ROOM_LOAD_ERROR = { code: 0, message: 'Failure load rooms' };
