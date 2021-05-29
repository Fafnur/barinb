import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AdminBuildingLinkModule, AdminPersonLinkModule } from '@app/admin/links/shared';
import { CarouselModule } from '@app/ui/carousel';

import { AdminRoomActionsModule } from '../admin-room-actions/admin-room-actions.module';
import { AdminRoomsTableComponent } from './admin-rooms-table.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoomActionsModule,
    AdminBuildingLinkModule,
    AdminPersonLinkModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
  ],
  declarations: [AdminRoomsTableComponent],
  exports: [AdminRoomsTableComponent],
})
export class AdminRoomsTableModule {}
