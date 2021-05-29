import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AdminBuildingClearDialogModule } from '../admin-building-clear-dialog/admin-building-clear-dialog.module';
import { AdminBuildingCreateDialogModule } from '../admin-building-create-dialog/admin-building-create-dialog.module';
import { AdminBuildingsActionsComponent } from './admin-buildings-actions.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, AdminBuildingClearDialogModule, AdminBuildingCreateDialogModule, MatButtonModule, MatIconModule],
  declarations: [AdminBuildingsActionsComponent],
  exports: [AdminBuildingsActionsComponent],
})
export class AdminBuildingsActionsModule {}
