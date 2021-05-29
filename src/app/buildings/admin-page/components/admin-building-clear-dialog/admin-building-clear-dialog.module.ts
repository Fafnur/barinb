import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminBuildingClearDialogComponent } from './admin-building-clear-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminBuildingClearDialogComponent],
  exports: [AdminBuildingClearDialogComponent],
})
export class AdminBuildingClearDialogModule {}
