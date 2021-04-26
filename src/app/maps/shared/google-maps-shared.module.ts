import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { GoogleMapsServiceModule } from '@app/maps/services';

import { GoogleMapComponent } from './google-map.component';

@NgModule({
  imports: [CommonModule, GoogleMapsModule, GoogleMapsServiceModule],
  declarations: [GoogleMapComponent],
  exports: [GoogleMapComponent],
})
export class GoogleMapsSharedModule {}
