import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { AdminLayoutModule } from '@app/admin/layout';
import { RoomManagerModule } from '@app/rooms/manager';

import { AppCommonModule } from '../../app-common.module';
import { AdminRoomsActionsModule } from './components/admin-rooms-actions/admin-rooms-actions.module';
import { AdminRoomsTableModule } from './components/admin-rooms-table/admin-rooms-table.module';
import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageRoutingModule } from './room-admin-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoomAdminPageRoutingModule,
    AdminLayoutModule,
    AppCommonModule,
    RoomManagerModule,
    MatDialogModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    AdminRoomsTableModule,
    AdminRoomsActionsModule,
  ],
  declarations: [RoomAdminPageComponent],
})
export class RoomAdminPageModule {}
