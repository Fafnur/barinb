import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { RoomBookingGuestComponent } from './room-booking-guest.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  declarations: [RoomBookingGuestComponent],
  exports: [RoomBookingGuestComponent],
})
export class RoomBookingGuestModule {}
