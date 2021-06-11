import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { FormsSharedModule } from '@app/core/forms/shared';

import { RoomBookingDialogModule } from '../room-booking-dialog/room-booking-dialog.module';
import { RoomBookingDateModule } from './components/room-booking-date/room-booking-date.module';
import { RoomBookingGuestModule } from './components/room-booking-guest/room-booking-guest.module';
import { RoomBookingFormComponent } from './room-booking-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsSharedModule,
    ReactiveFormsModule,
    RoomBookingDialogModule,
    RoomBookingDateModule,
    RoomBookingGuestModule,
  ],
  declarations: [RoomBookingFormComponent],
  exports: [RoomBookingFormComponent],
})
export class RoomBookingFormModule {}
