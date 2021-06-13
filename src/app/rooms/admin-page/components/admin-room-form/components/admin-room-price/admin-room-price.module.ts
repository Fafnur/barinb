import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomPriceComponent } from './admin-room-price.component';

@NgModule({
  imports: [CommonModule, MatInputModule, ReactiveFormsModule],
  declarations: [AdminRoomPriceComponent],
  exports: [AdminRoomPriceComponent],
})
export class AdminRoomPriceModule {}
