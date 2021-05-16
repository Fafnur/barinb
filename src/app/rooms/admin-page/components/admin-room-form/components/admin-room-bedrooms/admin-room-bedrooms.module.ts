import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomBedroomsComponent } from './admin-room-bedrooms.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule],
  declarations: [AdminRoomBedroomsComponent],
  exports: [AdminRoomBedroomsComponent],
})
export class AdminRoomBedroomsModule {}
