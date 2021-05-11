import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoomPhotosComponent } from './admin-room-photos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminRoomPhotosComponent],
  exports: [AdminRoomPhotosComponent],
})
export class AdminRoomPhotosModule {}
