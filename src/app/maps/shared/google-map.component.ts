import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { MapMarker } from '@app/maps/common';
import { GoogleMapsService } from '@app/maps/services';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapComponent implements OnInit {
  @Input() options!: google.maps.MapOptions;
  @Input() markerOptions: google.maps.MarkerOptions = { draggable: false };
  @Input() markers: MapMarker[] = [];

  @Output() mapMarkerClicked = new EventEmitter<google.maps.LatLngLiteral>();

  apiLoaded$!: Observable<boolean>;

  constructor(private readonly googleMapsService: GoogleMapsService) {}

  ngOnInit(): void {
    this.apiLoaded$ = this.googleMapsService.load();
  }

  onMapClick(marker: google.maps.LatLngLiteral): void {
    this.mapMarkerClicked.emit(marker);
  }
}
