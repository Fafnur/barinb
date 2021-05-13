import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoomRemoveDialogComponent } from './admin-room-remove-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminRoomRemoveDialogComponent],
  exports: [AdminRoomRemoveDialogComponent],
})
export class AdminRoomRemoveDialogModule {}
