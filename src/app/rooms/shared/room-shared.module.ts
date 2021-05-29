import { NgModule } from '@angular/core';

import { RoomAmenitiesLabelPipe } from './room-amenities-label.pipe';
import { RoomPreviewImagesPipe } from './room-preview-images.pipe';
import { RoomsPreviewImagesPipe } from './rooms-preview-images.pipe';

const pipes = [RoomPreviewImagesPipe, RoomAmenitiesLabelPipe, RoomsPreviewImagesPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class RoomSharedModule {}
