import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoomGuestsComponent } from './admin-room-guests.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminRoomGuestsComponent],
  exports: [AdminRoomGuestsComponent],
})
export class AdminRoomGuestsModule {}
