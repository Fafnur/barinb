import { NgModule } from '@angular/core';

import { RoomAmenitiesLabelPipe } from './room-amenities-label.pipe';
import { RoomPreviewImagesPipe } from './room-preview-images.pipe';

const pipes = [RoomPreviewImagesPipe, RoomAmenitiesLabelPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class RoomSharedModule {}
