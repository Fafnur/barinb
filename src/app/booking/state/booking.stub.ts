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
    photos: ['1.jpg'],
    created: '2021-05-11T01:14:42.988Z',
    updated: '2021-05-11T01:14:44.000Z',
    roomRemoveError: null,
    roomRemoveRun: false,
    roomChangeError: null,
    roomChangeRun: false,
  },
  created: '2021-05-11T01:14:42.988Z',
  updated: '2021-05-11T01:14:44.000Z',
  buildingChangeError: null,
  buildingChangeRun: false,
  buildingRemoveError: null,
  buildingRemoveRun: false,
  buildingRoomRemoveRun: false,
  buildingRoomRemoveError: null,
  buildingRoomAddError: null,
  buildingRoomAddRun: false,
};

export const BOOKING_DETAILS_STUB: BookingDetails = {
  [BookingField.Period]: {
    [BookingField.PeriodStart]: '2021-01-01',
    [BookingField.PeriodEnd]: '2021-01-02',
  },
  [BookingField.Guests]: 1,
};
