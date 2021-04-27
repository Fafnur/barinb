export interface MapMarker extends google.maps.LatLngLiteral {
  [key: string]: any;

  label?: string | google.maps.MarkerLabel | null;
}
