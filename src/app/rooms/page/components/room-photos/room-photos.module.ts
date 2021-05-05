import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';

import { RoomPhotosDialogModule } from '../room-photos-dialog/room-photos-dialog.module';
import { RoomPhotosComponent } from './room-photos.component';

@NgModule({
  imports: [CommonModule, CarouselModule, MatButtonModule, MatIconModule, MatDialogModule, RoomPhotosDialogModule, RoomSharedModule],
  declarations: [RoomPhotosComponent],
  exports: [RoomPhotosComponent],
})
export class RoomPhotosModule {}
