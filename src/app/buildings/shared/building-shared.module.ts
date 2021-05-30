import { NgModule } from '@angular/core';

import { BuildingsRoomsCountPipe } from './buildings-rooms-count.pipe';
import { BuildingsRoomsImagesPipe } from './buildings-rooms-images.pipe';

const pipes = [BuildingsRoomsCountPipe, BuildingsRoomsImagesPipe];

@NgModule({
  declarations: [...pipes],
  exports: [...pipes],
})
export class BuildingSharedModule {}
