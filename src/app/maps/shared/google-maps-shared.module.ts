import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

import { GoogleMapsServiceModule } from '@app/maps/services';
import { SpinnerModule } from '@app/ui/spinner';

import { GoogleMapComponent } from './google-map.component';

@NgModule({
  imports: [CommonModule, GoogleMapsModule, GoogleMapsServiceModule, SpinnerModule],
  declarations: [GoogleMapComponent],
  exports: [GoogleMapComponent],
})
export class GoogleMapsSharedModule {}
