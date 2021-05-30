import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AdminPersonClearDialogModule } from '../admin-person-clear-dialog/admin-person-clear-dialog.module';
import { AdminPersonCreateDialogModule } from '../admin-person-create-dialog/admin-person-create-dialog.module';
import { AdminPersonsActionsComponent } from './admin-persons-actions.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, AdminPersonClearDialogModule, AdminPersonCreateDialogModule, MatButtonModule, MatIconModule],
  declarations: [AdminPersonsActionsComponent],
  exports: [AdminPersonsActionsComponent],
})
export class AdminPersonsActionsModule {}
