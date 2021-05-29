import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminBuildingRemoveDialogComponent } from './admin-building-remove-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminBuildingRemoveDialogComponent],
  exports: [AdminBuildingRemoveDialogComponent],
})
export class AdminBuildingRemoveDialogModule {}
