import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminPersonClearDialogComponent } from './admin-person-clear-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminPersonClearDialogComponent],
  exports: [AdminPersonClearDialogComponent],
})
export class AdminPersonClearDialogModule {}
