import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NumeralSharedModule } from '@app/core/numerals/shared';

import { RoomBookingPriceComponent } from './room-booking-price.component';
import { RoomBookingPriceService } from './room-booking-price.service';

@NgModule({
  imports: [CommonModule, MatButtonModule, NumeralSharedModule],
  declarations: [RoomBookingPriceComponent],
  exports: [RoomBookingPriceComponent],
  providers: [RoomBookingPriceService],
})
export class RoomBookingPriceModule {}
