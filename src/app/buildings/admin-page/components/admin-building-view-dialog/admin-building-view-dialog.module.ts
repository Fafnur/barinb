import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { AdminViewSharedModule } from '@app/admin/view/shared';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { PersonSharedModule } from '@app/persons/shared';
import { RoomSharedModule } from '@app/rooms/shared';

import { AdminBuildingViewDialogComponent } from './admin-building-view-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PersonSharedModule,
    AdminViewSharedModule,
    RoomSharedModule,
    RouterModule,
    NavigationSharedModule,
  ],
  declarations: [AdminBuildingViewDialogComponent],
  exports: [AdminBuildingViewDialogComponent],
})
export class AdminBuildingViewDialogModule {}
