import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselModule } from '@app/ui/carousel';

import { RoomPhotosComponent } from './room-photos.component';
import { RoomPreviewImagesPipe } from './room-preview-images.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, CarouselModule, MatButtonModule, MatIconModule],
  declarations: [RoomPhotosComponent, RoomPreviewImagesPipe],
  exports: [RoomPhotosComponent],
})
export class RoomPhotosModule {}
