import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';
import { RoomManagerModule } from '@app/rooms/manager';

import { AppCommonModule } from '../../app-common.module';
import { AdminRoomsActionsModule } from './components/admin-rooms-actions/admin-rooms-actions.module';
import { AdminRoomsListModule } from './components/admin-rooms-list/admin-rooms-list.module';
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
    AdminRoomsTableModule,
    AdminRoomsListModule,
    AdminRoomsActionsModule,
  ],
  declarations: [RoomAdminPageComponent],
})
export class RoomAdminPageModule {}
