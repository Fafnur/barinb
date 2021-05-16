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
}

export type Room = RoomEntity;

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

export enum RoomAction {
  Actions = 'actions',
  View = 'view',
  Edit = 'edit',
  Remove = 'remove',
}
