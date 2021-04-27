import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookingServiceModule } from '@app/booking/service';
import { BuildingServiceModule } from '@app/buildings/service';
import { BuildingStateModule } from '@app/buildings/state';
import { PersonStateModule } from '@app/persons/state';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';
import { BookingListModule } from './components/booking-list/booking-list.module';
import { BookingMapModule } from './components/booking-map/booking-map.module';

@NgModule({
  imports: [
    CommonModule,
    BookingPageRoutingModule,
    RoomServiceModule,
    RoomStateModule,
    BuildingServiceModule,
    BuildingStateModule,
    PersonStateModule,
    BookingMapModule,
    BookingListModule,
    BookingServiceModule,
  ],
  declarations: [BookingPageComponent],
})
export class BookingPageModule {}
