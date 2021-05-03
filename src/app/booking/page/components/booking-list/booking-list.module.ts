import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookingPortletModule } from '../booking-portlet/booking-portlet.module';
import { BookingListComponent } from './booking-list.component';

@NgModule({
  imports: [CommonModule, RouterModule, BookingPortletModule],
  declarations: [BookingListComponent],
  exports: [BookingListComponent],
})
export class BookingListModule {}
