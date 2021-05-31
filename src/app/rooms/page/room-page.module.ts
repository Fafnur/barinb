import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BookingServiceModule } from '@app/booking/service';
import { BookingStateModule } from '@app/booking/state';
import { RoomManagerModule } from '@app/rooms/manager';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AppCommonModule } from '../../app-common.module';
import { RoomBookingCardModule } from './components/room-booking-card/room-booking-card.module';
import { RoomDescriptionModule } from './components/room-description/room-description.module';
import { RoomDetailsModule } from './components/room-details/room-details.module';
import { RoomFeaturesModule } from './components/room-features/room-features.module';
import { RoomHeaderModule } from './components/room-header/room-header.module';
import { RoomPersonModule } from './components/room-person/room-person.module';
import { RoomPhotoModule } from './components/room-photo/room-photo.module';
import { RoomPropsModule } from './components/room-props/room-props.module';
import { RoomPageComponent } from './room-page.component';
import { RoomPageRoutingModule } from './room-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoomPageRoutingModule,
    AppCommonModule,
    BookingServiceModule,
    BookingStateModule,
    RoomManagerModule,
    ContainerModule,
    MatIconModule,
    MatButtonModule,
    RoomPropsModule,
    RoomPhotoModule,
    RoomHeaderModule,
    RoomDetailsModule,
    RoomPersonModule,
    RoomFeaturesModule,
    RoomDescriptionModule,
    RoomBookingCardModule,
    GridModule,
  ],
  declarations: [RoomPageComponent],
})
export class RoomPageModule {}
