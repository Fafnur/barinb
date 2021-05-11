import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { AdminLayoutModule } from '@app/admin/layout';
import { NavigationSharedModule } from '@app/core/navigation/shared';
import { RoomManagerModule } from '@app/rooms/manager';
import { CarouselModule } from '@app/ui/carousel';

import { AppCommonModule } from '../../app-common.module';
import { AdminRoomClearDialogModule } from './components/admin-room-clear-dialog/admin-room-clear-dialog.module';
import { AdminRoomCreateDialogModule } from './components/admin-room-create-dialog/admin-room-create-dialog.module';
import { AdminRoomViewDialogModule } from './components/admin-room-view-dialog';
import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageRoutingModule } from './room-admin-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoomAdminPageRoutingModule,
    AdminLayoutModule,
    AppCommonModule,
    RoomManagerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    NavigationSharedModule,
    CarouselModule,
    AdminRoomClearDialogModule,
    AdminRoomCreateDialogModule,
    AdminRoomViewDialogModule,
  ],
  declarations: [RoomAdminPageComponent],
})
export class RoomAdminPageModule {}
