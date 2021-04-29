import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookingSharedModule } from '@app/booking/shared';
import { CarouselModule } from '@app/ui/carousel';

import { BookingCardComponent } from './booking-card.component';

@NgModule({
  imports: [CommonModule, CarouselModule, BookingSharedModule],
  declarations: [BookingCardComponent],
  exports: [BookingCardComponent],
})
export class BookingCardModule {}
