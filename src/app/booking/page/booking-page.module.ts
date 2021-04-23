import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';

@NgModule({
  imports: [CommonModule, BookingPageRoutingModule, RoomStateModule, RoomServiceModule],
  declarations: [BookingPageComponent],
})
export class BookingPageModule {}
