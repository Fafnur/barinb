import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminRoomFormModule } from '../admin-room-form/admin-room-form.module';
import { AdminRoomCreateDialogComponent } from './admin-room-create-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatSnackBarModule, AdminRoomFormModule],
  declarations: [AdminRoomCreateDialogComponent],
  exports: [AdminRoomCreateDialogComponent],
})
export class AdminRoomCreateDialogModule {}
