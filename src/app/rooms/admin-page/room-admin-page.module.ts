import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLayoutModule } from '@app/admin/layout';

import { RoomAdminPageComponent } from './room-admin-page.component';
import { RoomAdminPageRoutingModule } from './room-admin-page-routing.module';

@NgModule({
  imports: [CommonModule, RoomAdminPageRoutingModule, AdminLayoutModule],
  declarations: [RoomAdminPageComponent],
})
export class RoomAdminPageModule {}
