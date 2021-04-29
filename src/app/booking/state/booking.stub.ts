import { Room, RoomAmenities } from '@app/rooms/common';

export const ROOM_STUB: Room = {
  id: 1,
  building: 1,
  guests: 2,
  beds: 1,
  bedrooms: 1,
  bathrooms: 1,
  price: 2500,
  amenities: [
    RoomAmenities.AirConditioning,
    RoomAmenities.Elevator,
    RoomAmenities.CarbonMonoxideAlarm,
    RoomAmenities.Hangers,
    RoomAmenities.Tv,
  ],
  photos: [],
};
