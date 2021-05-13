import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoomClearDialogModule } from '../admin-room-clear-dialog/admin-room-clear-dialog.module';
import { AdminRoomCreateDialogModule } from '../admin-room-create-dialog/admin-room-create-dialog.module';
import { AdminRoomsActionsComponent } from './admin-rooms-actions.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, AdminRoomClearDialogModule, AdminRoomCreateDialogModule, MatButtonModule, MatIconModule],
  declarations: [AdminRoomsActionsComponent],
  exports: [AdminRoomsActionsComponent],
})
export class AdminRoomsActionsModule {}
