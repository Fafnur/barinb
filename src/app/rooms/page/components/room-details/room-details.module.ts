import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { RoomDetailsComponent } from './room-details.component';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [RoomDetailsComponent],
  exports: [RoomDetailsComponent],
})
export class RoomDetailsModule {}
