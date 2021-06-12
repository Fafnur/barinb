import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { RoomSharedModule } from '@app/rooms/shared';

import { AdminRoomAmenitiesComponent } from './admin-room-amenities.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, RoomSharedModule],
  declarations: [AdminRoomAmenitiesComponent],
  exports: [AdminRoomAmenitiesComponent],
})
export class AdminRoomAmenitiesModule {}
