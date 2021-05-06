import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoomBookingCardComponent } from './room-booking-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RoomBookingCardComponent],
  exports: [RoomBookingCardComponent],
})
export class RoomBookingCardModule {}
