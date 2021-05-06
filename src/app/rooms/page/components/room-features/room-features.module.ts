import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RoomFeaturesComponent } from './room-features.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [RoomFeaturesComponent],
  exports: [RoomFeaturesComponent],
})
export class RoomFeaturesModule {}
