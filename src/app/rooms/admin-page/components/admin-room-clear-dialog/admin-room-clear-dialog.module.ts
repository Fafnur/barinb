import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoomClearDialogComponent } from './admin-room-clear-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminRoomClearDialogComponent],
  exports: [AdminRoomClearDialogComponent],
})
export class AdminRoomClearDialogModule {}
