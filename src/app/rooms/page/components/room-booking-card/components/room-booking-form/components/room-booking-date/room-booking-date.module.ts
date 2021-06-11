import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { RoomBookingDateComponent } from './room-booking-date.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, ReactiveFormsModule],
  declarations: [RoomBookingDateComponent],
  exports: [RoomBookingDateComponent],
})
export class RoomBookingDateModule {}
