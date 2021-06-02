import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookingSharedModule } from '@app/booking/shared';
import { SharedModule } from '@app/ui/shared';

import { BookingBoxComponent } from './booking-box.component';

@NgModule({
  imports: [CommonModule, RouterModule, BookingSharedModule, SharedModule],
  declarations: [BookingBoxComponent],
  exports: [BookingBoxComponent],
})
export class BookingBoxModule {}
