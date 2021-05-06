import { BookingDetails, BookingField, BookingVariant } from '@app/booking/common';
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
    description: 'Небольшая квартира в центре города',
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

export const BOOKING_DETAILS_STUB: BookingDetails = {
  [BookingField.Period]: {
    [BookingField.PeriodStart]: '2021-01-01',
    [BookingField.PeriodEnd]: '2021-01-02',
  },
  [BookingField.Guests]: 1,
};
