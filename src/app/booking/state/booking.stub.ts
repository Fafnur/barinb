import { BookingVariant } from '@app/booking/common';
import { RoomAmenities } from '@app/rooms/common';

export const BOOKING_VARIANT_STUB: BookingVariant = {
  id: 1,
  person: 1,
  rooms: [1],
  name: 'Отель Иванов',
  city: 'Санкт-Петербург',
  lat: 59.94025370914283,
  lng: 30.35245818826544,
  address: 'Басков пер., 2 стр1, Санкт-Петербург, 191014',
  firstRoom: {
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
  },
};
