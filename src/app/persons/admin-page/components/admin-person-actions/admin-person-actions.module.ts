import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AdminPersonEditDialogModule } from '../admin-person-edit-dialog/admin-person-edit-dialog.module';
import { AdminPersonRemoveDialogModule } from '../admin-person-remove-dialog/admin-person-remove-dialog.module';
import { AdminPersonViewDialogModule } from '../admin-person-view-dialog/admin-person-view-dialog.module';
import { AdminPersonActionsComponent } from './admin-person-actions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AdminPersonEditDialogModule,
    AdminPersonRemoveDialogModule,
    AdminPersonViewDialogModule,
  ],
  declarations: [AdminPersonActionsComponent],
  exports: [AdminPersonActionsComponent],
})
export class AdminPersonActionsModule {}
