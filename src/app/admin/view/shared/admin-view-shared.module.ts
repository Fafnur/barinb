import { NgModule } from '@angular/core';

import { AdminRoomGroupComponent } from './components/admin-room-group/admin-room-group.component';
import { AdminRoomGroupModule } from './components/admin-room-group/admin-room-group.module';
import { AdminRoomLabelComponent } from './components/admin-room-label/admin-room-label.component';
import { AdminRoomLabelModule } from './components/admin-room-label/admin-room-label.module';
import { AdminRoomValueComponent } from './components/admin-room-value/admin-room-value.component';
import { AdminRoomValueModule } from './components/admin-room-value/admin-room-value.module';

@NgModule({
  imports: [AdminRoomGroupModule, AdminRoomValueModule, AdminRoomLabelModule],
  exports: [AdminRoomGroupComponent, AdminRoomLabelComponent, AdminRoomValueComponent],
})
export class AdminViewSharedModule {}
