import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoomBuildingComponent } from './admin-room-building.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminRoomBuildingComponent],
  exports: [AdminRoomBuildingComponent],
})
export class AdminRoomBuildingModule {}
