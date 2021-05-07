import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { RoomBookingDialogComponent } from './room-booking-dialog.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  declarations: [RoomBookingDialogComponent],
  exports: [RoomBookingDialogComponent],
})
export class RoomBookingDialogModule {}
