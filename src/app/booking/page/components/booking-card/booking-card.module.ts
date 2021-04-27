import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookingCardComponent } from './booking-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookingCardComponent],
  exports: [BookingCardComponent],
})
export class BookingCardModule {}
