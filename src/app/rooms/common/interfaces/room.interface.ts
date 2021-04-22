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

export interface Room {
  id: number;
  building: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  beds: number;
  price: number;

  photos: string[];
  amenities: RoomAmenities[];
}
