import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminPersonRemoveDialogComponent } from './admin-person-remove-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  declarations: [AdminPersonRemoveDialogComponent],
  exports: [AdminPersonRemoveDialogComponent],
})
export class AdminPersonRemoveDialogModule {}
