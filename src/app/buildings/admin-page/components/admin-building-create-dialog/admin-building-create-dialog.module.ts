import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminBuildingFormModule } from '../admin-building-form/admin-building-form.module';
import { AdminBuildingCreateDialogComponent } from './admin-building-create-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatSnackBarModule, AdminBuildingFormModule],
  declarations: [AdminBuildingCreateDialogComponent],
  exports: [AdminBuildingCreateDialogComponent],
})
export class AdminBuildingCreateDialogModule {}
