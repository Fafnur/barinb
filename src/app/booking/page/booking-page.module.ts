import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BookingServiceModule } from '@app/booking/service';
import { BookingStateModule } from '@app/booking/state';
import { ContainerModule } from '@app/ui/container';
import { GridModule } from '@app/ui/grid';

import { AppCommonModule } from '../../app-common.module';
import { BookingPageComponent } from './booking-page.component';
import { BookingPageRoutingModule } from './booking-page-routing.module';
import { BookingBoxModule } from './components/booking-box/booking-box.module';
import { BookingCardModule } from './components/booking-card/booking-card.module';
import { BookingListModule } from './components/booking-list/booking-list.module';
import { BookingMapModule } from './components/booking-map/booking-map.module';

@NgModule({
  imports: [
    CommonModule,
    BookingPageRoutingModule,
    AppCommonModule,
    BookingMapModule,
    BookingListModule,
    BookingCardModule,
    BookingBoxModule,
    BookingServiceModule,
    BookingStateModule,
    MatIconModule,
    MatButtonModule,
    GridModule,
    ContainerModule,
  ],
  declarations: [BookingPageComponent],
})
export class BookingPageModule {}
