import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BuildingStateModule } from '@app/buildings/state';
import { GoogleMapsSharedModule } from '@app/maps/shared';
import { PersonStateModule } from '@app/persons/state';
import { RoomServiceModule } from '@app/rooms/service';
import { RoomStateModule } from '@app/rooms/state';

import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BookingPageRoutingModule,
    RoomStateModule,
    BuildingStateModule,
    PersonStateModule,
    RoomServiceModule,
    GoogleMapsSharedModule,
  ],
  declarations: [BookingPageComponent],
})
export class BookingPageModule {}
