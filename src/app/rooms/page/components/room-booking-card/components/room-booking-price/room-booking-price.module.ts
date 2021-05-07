import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NumeralSharedModule } from '@app/numerals/shared';

import { RoomBookingPriceComponent } from './room-booking-price.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, NumeralSharedModule],
  declarations: [RoomBookingPriceComponent],
  exports: [RoomBookingPriceComponent],
})
export class RoomBookingPriceModule {}
