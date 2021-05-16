import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { AdminRoomPhotosComponent } from './admin-room-photos.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule, MatChipsModule, ReactiveFormsModule],
  declarations: [AdminRoomPhotosComponent],
  exports: [AdminRoomPhotosComponent],
})
export class AdminRoomPhotosModule {}
