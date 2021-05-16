import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomAmenitiesComponent } from './admin-room-amenities.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatSelectModule, MatIconModule, MatButtonModule, ReactiveFormsModule, RoomSharedModule],
  declarations: [AdminRoomAmenitiesComponent],
  exports: [AdminRoomAmenitiesComponent],
})
export class AdminRoomAmenitiesModule {}
