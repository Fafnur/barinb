import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RoomDescriptionComponent } from './room-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RoomDescriptionComponent],
  exports: [RoomDescriptionComponent],
})
export class RoomDescriptionModule {}
