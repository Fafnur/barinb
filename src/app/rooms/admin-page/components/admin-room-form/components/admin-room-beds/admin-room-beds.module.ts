import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomBedsComponent } from './admin-room-beds.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AdminRoomBedsComponent],
  exports: [AdminRoomBedsComponent],
})
export class AdminRoomBedsModule {}
