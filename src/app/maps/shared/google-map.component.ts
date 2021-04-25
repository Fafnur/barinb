import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GoogleMapsService } from '@app/maps/services';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapComponent implements OnInit {
  @Input() options!: google.maps.MapOptions;

  apiLoaded$!: Observable<boolean>;

  constructor(private readonly googleMapsService: GoogleMapsService) {}

  ngOnInit(): void {
    this.apiLoaded$ = this.googleMapsService.load();
  }
}
