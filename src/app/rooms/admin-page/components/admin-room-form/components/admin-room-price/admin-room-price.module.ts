import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomPriceComponent } from './admin-room-price.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AdminRoomPriceComponent],
  exports: [AdminRoomPriceComponent],
})
export class AdminRoomPriceModule {}
