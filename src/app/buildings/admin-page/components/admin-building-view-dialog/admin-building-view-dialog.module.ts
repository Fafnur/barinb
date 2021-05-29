import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminViewSharedModule } from '@app/admin/view/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminBuildingViewDialogComponent } from './admin-building-view-dialog.component';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, PersonSharedModule, AdminViewSharedModule, RoomSharedModule],
  declarations: [AdminBuildingViewDialogComponent],
  exports: [AdminBuildingViewDialogComponent],
})
export class AdminBuildingViewDialogModule {}
