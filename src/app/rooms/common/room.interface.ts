import { Entity } from '@app/core/common';

export enum RoomAmenities {
  Shampoo = 'shampoo',
  HairDryer = 'hairDryer',

  Iron = 'iron',
  Hangers = 'hangers',
  Essentials = 'essentials',
  Towels = 'towels',
  BedSheets = 'bedSheets',
  Soap = 'soap',
  ToiletPaper = 'toiletPaper',
  Washer = 'washer',
  Tv = 'tv',
  Heating = 'heating',

  SecurityCameras = 'securityCameras',
  SmokeAlarm = 'smokeAlarm',

  Wifi = 'wifi',
  DedicatedWorkspace = 'dedicatedWorkspace',

  Kitchen = 'kitchen',
  CookingBasics = 'cookingBasics',

  Elevator = 'elevator',
  FreeParking = 'freeParking',

  LongTermStays = 'longTermStays',

  AirConditioning = 'airConditioning',
  CarbonMonoxideAlarm = 'carbonMonoxideAlarm',
  PrivateEntrance = 'privateEntrance',
}

export const ROOM_AMENITIES: RoomAmenities[] = [
  RoomAmenities.Shampoo,
  RoomAmenities.HairDryer,
  RoomAmenities.Iron,
  RoomAmenities.Hangers,
  RoomAmenities.Essentials,
  RoomAmenities.Towels,
  RoomAmenities.BedSheets,
  RoomAmenities.Soap,
  RoomAmenities.ToiletPaper,
  RoomAmenities.Washer,
  RoomAmenities.Tv,
  RoomAmenities.Heating,
  RoomAmenities.SecurityCameras,
  RoomAmenities.SmokeAlarm,
  RoomAmenities.Wifi,
  RoomAmenities.DedicatedWorkspace,
  RoomAmenities.Kitchen,
  RoomAmenities.CookingBasics,
  RoomAmenities.Elevator,
  RoomAmenities.FreeParking,
  RoomAmenities.LongTermStays,
  RoomAmenities.AirConditioning,
  RoomAmenities.CarbonMonoxideAlarm,
  RoomAmenities.PrivateEntrance,
];

export const ROOM_AMENITIES_LABELS: Record<RoomAmenities, string> = {
  [RoomAmenities.Shampoo]: 'Шампунь',
  [RoomAmenities.HairDryer]: 'Фен',
  [RoomAmenities.Iron]: 'Утюг',
  [RoomAmenities.Hangers]: 'Вешалки',
  [RoomAmenities.Essentials]: 'Предметы первой необходимости',
  [RoomAmenities.Towels]: 'Полотенца',
  [RoomAmenities.BedSheets]: 'Постельное белье',
  [RoomAmenities.Soap]: 'Мыло',
  [RoomAmenities.ToiletPaper]: 'Туалетная бумага',
  [RoomAmenities.Washer]: 'Стиральная машина',
  [RoomAmenities.Tv]: 'Телевизор',
  [RoomAmenities.Heating]: 'Обогреватель',
  [RoomAmenities.SecurityCameras]: 'Камеры видеонаблюдения',
  [RoomAmenities.SmokeAlarm]: 'Дымовая сигнализация',
  [RoomAmenities.Wifi]: 'Wifi',
  [RoomAmenities.DedicatedWorkspace]: 'Рабочее место',
  [RoomAmenities.Kitchen]: 'Кухня',
  [RoomAmenities.CookingBasics]: 'Кухонные принадлежности',
  [RoomAmenities.Elevator]: 'Лифт',
  [RoomAmenities.FreeParking]: 'Бесплатная парковка',
  [RoomAmenities.LongTermStays]: 'Долгосрочная аренда',
  [RoomAmenities.AirConditioning]: 'Кондиционер',
  [RoomAmenities.CarbonMonoxideAlarm]: 'Сигнализация угарного газа',
  [RoomAmenities.PrivateEntrance]: 'Отдельный вход',
};

export interface RoomDto {
  readonly id: number;
  readonly created: string;
  readonly updated: string;
  readonly building: number;
  readonly guests: number;
  readonly bedrooms: number;
  readonly bathrooms: number;
  readonly beds: number;
  readonly price: number;
  readonly description: string;
  readonly photos: string[];
  readonly amenities: RoomAmenities[];
}

export interface RoomEntity {
  id: number;
  created: string;
  updated: string;
  building: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  price: number;
  description: string;
  photos: string[];
  amenities: RoomAmenities[];

  roomRemoveRun: boolean;
  roomRemoveError: Record<string, any> | null;

  roomChangeRun: boolean;
  roomChangeError: Record<string, any> | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Room extends RoomEntity {}

export enum RoomField {
  ID = 'id',
  Building = 'building',
  Person = 'person',
  Guests = 'guests',
  Bedrooms = 'bedrooms',
  Bathrooms = 'bathrooms',
  Beds = 'beds',
  Price = 'price',
  Description = 'description',
  Photos = 'photos',
  Amenities = 'amenities',
  Created = 'created',
  Updated = 'updated',
}

export interface NewRoom {
  [RoomField.Person]: number;
  [RoomField.Building]: number;
  [RoomField.Guests]: number;
  [RoomField.Bedrooms]: number;
  [RoomField.Beds]: number;
  [RoomField.Bathrooms]: number;
  [RoomField.Photos]: string[];
  [RoomField.Amenities]: RoomAmenities[];
  [RoomField.Description]: string;
  [RoomField.Price]: number;
}

export type ChangedRoom = Partial<NewRoom> & Entity;

export const ROOMS_IDS: Record<RoomField, string> = {
  [RoomField.ID]: 'RoomId',
  [RoomField.Person]: 'RoomPerson',
  [RoomField.Building]: 'RoomBuilding',
  [RoomField.Guests]: 'RoomGuests',
  [RoomField.Bedrooms]: 'RoomBedrooms',
  [RoomField.Beds]: 'RoomBeds',
  [RoomField.Bathrooms]: 'RoomBathrooms',
  [RoomField.Photos]: 'RoomPhotos',
  [RoomField.Amenities]: 'RoomAmenities',
  [RoomField.Description]: 'RoomDescription',
  [RoomField.Price]: 'RoomPrice',
  [RoomField.Created]: 'RoomCreated',
  [RoomField.Updated]: 'RoomUpdated',
};
