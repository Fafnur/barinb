import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdminPersonFormModule } from '../admin-person-form/admin-person-form.module';
import { AdminPersonCreateDialogComponent } from './admin-person-create-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatSnackBarModule, AdminPersonFormModule],
  declarations: [AdminPersonCreateDialogComponent],
  exports: [AdminPersonCreateDialogComponent],
})
export class AdminPersonCreateDialogModule {}
