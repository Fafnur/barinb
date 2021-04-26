import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GoogleMapsSharedModule } from '@app/maps/shared';

import { BookingMapComponent } from './booking-map.component';

@NgModule({
  imports: [CommonModule, GoogleMapsSharedModule],
  declarations: [BookingMapComponent],
  exports: [BookingMapComponent],
})
export class BookingMapModule {}
