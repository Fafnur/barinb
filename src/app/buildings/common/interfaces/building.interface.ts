export interface Building extends google.maps.LatLngLiteral {
  id: number;
  name: string;
  rooms: number[];
  person: number;
  city: string;
  address: string;

  created: string;
  updated: string;
}
