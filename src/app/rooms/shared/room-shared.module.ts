import { NgModule } from '@angular/core';

import { RoomPreviewImagesPipe } from './room-preview-images.pipe';

const pipes = [RoomPreviewImagesPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class RoomSharedModule {}
