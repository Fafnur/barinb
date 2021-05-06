import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RoomHeaderComponent } from './room-header.component';

@NgModule({
  imports: [CommonModule, MatIconModule, MatButtonModule],
  declarations: [RoomHeaderComponent],
  exports: [RoomHeaderComponent],
})
export class RoomHeaderModule {}
