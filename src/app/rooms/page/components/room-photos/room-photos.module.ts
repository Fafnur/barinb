import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { CarouselModule } from '@app/ui/carousel';

import { RoomPhotosDialogModule } from '../room-photos-dialog/room-photos-dialog.module';
import { RoomPhotosComponent } from './room-photos.component';
import { RoomPreviewImagesPipe } from './room-preview-images.pipe';

@NgModule({
  imports: [CommonModule, CarouselModule, MatButtonModule, MatIconModule, MatDialogModule, RoomPhotosDialogModule],
  declarations: [RoomPhotosComponent, RoomPreviewImagesPipe],
  exports: [RoomPhotosComponent],
})
export class RoomPhotosModule {}
