import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormsSharedModule } from '@app/forms/shared';
import { NumeralSharedModule } from '@app/numerals/shared';

import { RoomBookingDateComponent } from './components/room-booking-date/room-booking-date.component';
import { RoomBookingGuestComponent } from './components/room-booking-guest/room-booking-guest.component';
import { RoomBookingFormComponent } from './room-booking-form.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    NumeralSharedModule,
    FormsSharedModule,
    ReactiveFormsModule,
  ],
  declarations: [RoomBookingFormComponent, RoomBookingDateComponent, RoomBookingGuestComponent],
  exports: [RoomBookingFormComponent],
})
export class RoomBookingFormModule {}