export interface MapMarkerConfig<T = any> extends google.maps.LatLngLiteral {
  label?: string | google.maps.MarkerLabel | null;

  data: T;
}
