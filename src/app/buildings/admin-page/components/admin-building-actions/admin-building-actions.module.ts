import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminBuildingEditDialogModule } from '../admin-building-edit-dialog/admin-building-edit-dialog.module';
import { AdminBuildingRemoveDialogModule } from '../admin-building-remove-dialog/admin-building-remove-dialog.module';
import { AdminBuildingViewDialogModule } from '../admin-building-view-dialog/admin-building-view-dialog.module';
import { AdminBuildingActionsComponent } from './admin-building-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AdminBuildingEditDialogModule,
    AdminBuildingRemoveDialogModule,
    AdminBuildingViewDialogModule,
  ],
  declarations: [AdminBuildingActionsComponent],
  exports: [AdminBuildingActionsComponent],
})
export class AdminBuildingActionsModule {}
