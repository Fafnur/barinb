import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoomsListComponent } from './admin-rooms-list.component';
import { AdminRoomCardModule } from '../admin-room-card/admin-room-card.module';

@NgModule({
  imports: [CommonModule, AdminRoomCardModule],
  declarations: [AdminRoomsListComponent],
  exports: [AdminRoomsListComponent],
})
export class AdminRoomsListModule {}
