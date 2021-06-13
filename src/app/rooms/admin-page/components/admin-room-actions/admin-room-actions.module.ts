import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminRoomEditDialogModule } from '../admin-room-edit-dialog/admin-room-edit-dialog.module';
import { AdminRoomRemoveDialogModule } from '../admin-room-remove-dialog/admin-room-remove-dialog.module';
import { AdminRoomViewDialogModule } from '../admin-room-view-dialog/admin-room-view-dialog.module';
import { AdminRoomActionsComponent } from './admin-room-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AdminRoomEditDialogModule,
    AdminRoomRemoveDialogModule,
    AdminRoomViewDialogModule,
  ],
  declarations: [AdminRoomActionsComponent],
  exports: [AdminRoomActionsComponent],
})
export class AdminRoomActionsModule {}
