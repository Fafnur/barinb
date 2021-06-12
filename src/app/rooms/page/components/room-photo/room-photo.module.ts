import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { RoomSharedModule } from '@app/rooms/shared';
import { CarouselModule } from '@app/ui/carousel';
import { SharedModule } from '@app/ui/shared';

import { RoomPhotosDialogModule } from './components/room-photos-dialog/room-photos-dialog.module';
import { RoomPhotoComponent } from './room-photo.component';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RoomPhotosDialogModule,
    RoomSharedModule,
    SharedModule,
  ],
  declarations: [RoomPhotoComponent],
  exports: [RoomPhotoComponent],
})
export class RoomPhotoModule {}
