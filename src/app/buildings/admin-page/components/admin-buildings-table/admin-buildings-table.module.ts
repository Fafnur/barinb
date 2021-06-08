import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';

import { AdminBuildingActionsModule } from '../admin-building-actions/admin-building-actions.module';
import { AdminBuildingsTableComponent } from './admin-buildings-table.component';

@NgModule({
  imports: [
    CommonModule,
    AdminBuildingActionsModule,
    AdminBuildingLinkModule,
    AdminPersonLinkModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AdminBuildingsTableComponent],
  exports: [AdminBuildingsTableComponent],
})
export class AdminBuildingsTableModule {}
