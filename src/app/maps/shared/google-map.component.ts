import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Observable } from 'rxjs';

import { MapMarkerConfig } from '@app/maps/common';
import { GoogleMapsService } from '@app/maps/services';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  @Input() options!: google.maps.MapOptions;
  @Input() markerOptions: google.maps.MarkerOptions = { draggable: false };
  @Input() markers: MapMarkerConfig[] = [];

  @Output() mapMarkerClicked = new EventEmitter<MapMarkerConfig>();

  apiLoaded$!: Observable<boolean>;

  constructor(private readonly googleMapsService: GoogleMapsService) {}

  ngOnInit(): void {
    this.apiLoaded$ = this.googleMapsService.load();
  }

  onMarkerClick(config: MapMarkerConfig, marker: MapMarker): void {
    this.mapMarkerClicked.emit(config);
    this.infoWindow?.open(marker);
  }

  onMapClick(): void {
    this.infoWindow?.close();
  }
}
