import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoomDescriptionComponent } from './admin-room-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminRoomDescriptionComponent],
  exports: [AdminRoomDescriptionComponent],
})
export class AdminRoomDescriptionModule {}
