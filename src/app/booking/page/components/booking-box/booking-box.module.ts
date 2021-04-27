import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookingBoxComponent } from './booking-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BookingBoxComponent],
  exports: [BookingBoxComponent],
})
export class BookingBoxModule {}
