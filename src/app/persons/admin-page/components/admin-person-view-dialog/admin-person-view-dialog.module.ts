import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminBuildingLinkModule } from '@app/admin/links/shared';
import { AdminViewSharedModule } from '@app/admin/view/shared';
import { PersonSharedModule } from '@app/persons/shared';

import { AdminPersonViewDialogComponent } from './admin-person-view-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, PersonSharedModule, AdminViewSharedModule, AdminBuildingLinkModule],
  declarations: [AdminPersonViewDialogComponent],
  exports: [AdminPersonViewDialogComponent],
})
export class AdminPersonViewDialogModule {}
