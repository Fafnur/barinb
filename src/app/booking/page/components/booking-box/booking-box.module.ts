import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookingSharedModule } from '@app/booking/shared';
import { CarouselModule } from '@app/ui/carousel';

import { BookingBoxComponent } from './booking-box.component';

@NgModule({
  imports: [CommonModule, RouterModule, CarouselModule, BookingSharedModule],
  declarations: [BookingBoxComponent],
  exports: [BookingBoxComponent],
})
export class BookingBoxModule {}
