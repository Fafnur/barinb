import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Building } from '@app/buildings/common';
import { BuildingService } from '@app/buildings/service';
import { MapMarker } from '@app/maps/common';

@Component({
  selector: 'app-booking-map',
  templateUrl: './booking-map.component.html',
  styleUrls: ['./booking-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingMapComponent implements OnInit {
  options: google.maps.MapOptions = {
    center: {
      lat: 59.93839227045331,
      lng: 30.360033589998572,
    },
    zoom: 14,
  };

  building$!: Observable<Building[]>;

  constructor(private readonly buildingService: BuildingService) {}

  ngOnInit(): void {
    this.building$ = this.buildingService.buildings$;
  }

  onMapMarkerClicked(marker: MapMarker): void {}
}
